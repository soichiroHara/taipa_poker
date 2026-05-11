import type { GameState } from './game';
import type { PlayerAction } from './action';
import type { SrpScenario } from '../constants/handRanges';
import type { PlayerSummary } from './player';

// SRP ディール結果（シングルプレイ用・旧）
export interface SrpDealResult {
  scenario: SrpScenario;
  originalRaiser: {
    position: string;
    hand: [string, string];
  };
  caller: {
    position: string;
    hand: [string, string];
    action: 'raise' | 'call';
  };
}

// ルーム参加者への個人向けディール結果
export interface DealResult {
  roomId: string;
  position: string;       // 'UTG' or 'CO'
  hand: [string, string]; // 自分のハンドのみ
}

// クライアント → サーバー
export interface ClientToServerEvents {
  'game:join': (payload: { gameId: string; playerName: string }) => void;
  'game:action': (payload: { gameId: string; action: PlayerAction }) => void;
  'game:leave': (payload: { gameId: string }) => void;
  // ルーム（汎用）
  'room:create': (payload: { scenario: SrpScenario, name: string }) => void;
  'room:join': (payload: { roomId: string, name: string  }) => void;
  'room:deal': (payload: { roomId: string }) => void;
  // SRP シングルプレイ（旧）
  'srp:deal': (payload: { scenario: SrpScenario }) => void;
}

export interface PlayersStatePayload {
  roomId: string;
  status: 'waiting' | 'ready';
  players: PlayerSummary[];
}

// サーバー → クライアント
export interface ServerToClientEvents {
  'game:state': (state: GameState) => void;
  'game:started': (state: GameState) => void;
  'game:finished': (state: GameState) => void;
  'game:error': (payload: { message: string }) => void;
  // ルーム（汎用）
  'room:created': (payload: { roomId: string; position: 'UTG', name: string }) => void;
  'room:joined': (payload: { position: 'CO', name: string  }) => void;
  'room:ready': (payload: { roomId: string }) => void;
  'room:dealt': (result: DealResult) => void;
  'room:state': (payload: PlayersStatePayload) => void;
  'room:error': (payload: { message: string }) => void;
  // SRP シングルプレイ（旧）
  'srp:dealt': (result: SrpDealResult) => void;
  'srp:error': (payload: { message: string }) => void;
}
