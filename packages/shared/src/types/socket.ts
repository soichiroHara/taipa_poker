import { GameState } from './game';
import { PlayerAction } from './action';
import { Spot } from './spot';

// クライアント → サーバー
export interface ClientToServerEvents {
  'game:join': (payload: { gameId: string; playerName: string }) => void;
  'game:action': (payload: { gameId: string; action: PlayerAction }) => void;
  'game:leave': (payload: { gameId: string }) => void;
  'room:create': (payload: { spot: Spot; playerName: string }) => void;
  'room:join': (payload: { roomId: string; playerName: string }) => void;
}

// サーバー → クライアント
export interface ServerToClientEvents {
  'game:state': (state: GameState) => void;
  'game:started': (state: GameState) => void;
  'game:finished': (state: GameState) => void;
  'game:error': (payload: { message: string }) => void;
  'room:created': (payload: { roomId: string }) => void;
  'room:playerJoined': (payload: { playerName: string; playerCount: number }) => void;
}
