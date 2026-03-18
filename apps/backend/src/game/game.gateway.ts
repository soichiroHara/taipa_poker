import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService } from './game.service';
import { RoomService } from './room.service';
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from '../../../../shared/src/types/socket';
import { SrpScenario } from '../../../../shared/src/constants/handRanges';
import { console } from 'inspector';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  },
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server<ClientToServerEvents, ServerToClientEvents>;

  constructor(
    private readonly gameService: GameService,
    private readonly roomService: RoomService,
  ) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    // ルームからプレイヤーを削除
    this.roomService.removePlayer(client.id);
  }

  // ============================================================
  // SRP シングルプレイ（旧）
  // ============================================================

  @SubscribeMessage('srp:deal')
  handleSrpDeal(
    @MessageBody() payload: { scenario: SrpScenario },
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result = this.gameService.dealSrp(payload.scenario);
      client.emit('srp:dealt', result);
    } catch (err) {
      client.emit('srp:error', { message: String(err) });
    }
  }

  // ============================================================
  // ルーム
  // ============================================================

  @SubscribeMessage('room:create')
  handleRoomCreate(
    @MessageBody() payload: { scenario: SrpScenario },
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const { roomId, position } = this.roomService.createRoom(client.id, payload.scenario);
      client.join(roomId);
      client.emit('room:created', { roomId, position });
    } catch (err) {
      client.emit('room:error', { message: String(err) });
    }
  }

  @SubscribeMessage('room:join')
  handleRoomJoin(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const joined = this.roomService.joinRoom(client.id, payload.roomId);
      if (!joined) {
        client.emit('room:error', { message: 'ルームが見つからないか、すでに満員です' });
        return;
      }
      client.join(payload.roomId);
      // 参加者本人に通知
      client.emit('room:joined', { position: joined.position });
      // ルーム全員に ready を通知
      this.server.to(payload.roomId).emit('room:ready', { roomId: payload.roomId });
    } catch (err) {
      client.emit('room:error', { message: String(err) });
    }
  }

  @SubscribeMessage('room:deal')
  handleRoomDeal(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const room = this.roomService.getRoom(payload.roomId);
      if (!room) {
        client.emit('room:error', { message: 'ルームが見つかりません' });
        return;
      }
      if (room.status !== 'ready') {
        client.emit('room:error', { message: 'まだ2人揃っていません' });
        return;
      }

      const deals = this.gameService.dealHandsPlayersInTheSameRoom(room);
      for (const { socketId, result } of deals) {
        this.server.to(socketId).emit('room:dealt', result);
      }
    } catch (err) {
      client.emit('room:error', { message: String(err) });
    }
  }
}
