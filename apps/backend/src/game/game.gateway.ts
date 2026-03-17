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
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '@taipa-poker/shared';
import { SrpScenario } from '../../../../shared/src/constants/handRanges';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  },
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server<ClientToServerEvents, ServerToClientEvents>;

  constructor(private readonly gameService: GameService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

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
}
