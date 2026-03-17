import { GameState } from './game';
import { PlayerAction } from './action';
import { Spot } from './spot';
import { SrpScenario } from '../constants/handRanges';

// SRP ディール結果
export interface SrpDealResult {
  scenario: SrpScenario;
  originalRaiser: {
    position: string; // 'UTG' など
    hand: [string, string]; // カード2枚 e.g. ['Ah', 'Kd']
  };
  caller: {
    position: string; // 'HJ' / 'CO' など
    hand: [string, string];
    action: 'raise' | 'call'; // 3bet or call
  };
}

// クライアント → サーバー
export interface ClientToServerEvents {
  'game:join': (payload: { gameId: string; playerName: string }) => void;
  'game:action': (payload: { gameId: string; action: PlayerAction }) => void;
  'game:leave': (payload: { gameId: string }) => void;
  'room:create': (payload: { spot: Spot; playerName: string }) => void;
  'room:join': (payload: { roomId: string; playerName: string }) => void;
  'srp:deal': (payload: { scenario: SrpScenario }) => void;
}

// サーバー → クライアント
export interface ServerToClientEvents {
  'game:state': (state: GameState) => void;
  'game:started': (state: GameState) => void;
  'game:finished': (state: GameState) => void;
  'game:error': (payload: { message: string }) => void;
  'room:created': (payload: { roomId: string }) => void;
  'room:playerJoined': (payload: { playerName: string; playerCount: number }) => void;
  'srp:dealt': (result: SrpDealResult) => void;
  'srp:error': (payload: { message: string }) => void;
}
