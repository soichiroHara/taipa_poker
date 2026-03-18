import { Injectable } from '@nestjs/common';
import { SrpScenario } from '../../../../shared/src/constants/handRanges';

// ルーム内プレイヤー
export interface RoomPlayer {
  socketId: string;
  position: 'UTG' | 'CO';
}

// ルーム
export interface Room {
  roomId: string;
  scenario: SrpScenario;
  players: RoomPlayer[];
  status: 'waiting' | 'ready';
}

@Injectable()
export class RoomService {
  private rooms = new Map<string, Room>();

  /**
   * ルームを作成する。作成者はUTGポジションになる。
   */
  createRoom(socketId: string, scenario: SrpScenario): { roomId: string; position: 'UTG' } {
    const roomId = Array.from({ length: 5 }, () =>
      'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]
    ).join('');

    const room: Room = {
      roomId,
      scenario,
      players: [{ socketId, position: 'UTG' }],
      status: 'waiting',
    };
    this.rooms.set(roomId, room);
    return { roomId, position: 'UTG' };
  }

  /**
   * ルームに参加する。参加者はCOポジションになる。
   * 2人揃ったらstatus='ready'に更新する。
   */
  joinRoom(socketId: string, roomId: string): { room: Room; position: 'CO' } | null {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    if (room.status !== 'waiting') return null;
    if (room.players.length >= 2) return null;

    room.players.push({ socketId, position: 'CO' });
    room.status = 'ready';
    return { room, position: 'CO' };
  }

  /**
   * ルームを取得する。
   */
  getRoom(roomId: string): Room | undefined {
    return this.rooms.get(roomId);
  }

  /**
   * ソケット切断時にルームからプレイヤーを削除する。
   * プレイヤーが0人になったらルームを削除する。
   * @returns 影響を受けたroomId（なければnull）
   */
  removePlayer(socketId: string): string | null {
    for (const [roomId, room] of this.rooms.entries()) {
      const idx = room.players.findIndex((p) => p.socketId === socketId);
      if (idx !== -1) {
        room.players.splice(idx, 1);
        if (room.players.length === 0) {
          this.rooms.delete(roomId);
        } else {
          room.status = 'waiting';
        }
        return roomId;
      }
    }
    return null;
  }
}
