import type { Card } from '../constants/deck';
import type { Player } from './player';
import type { PlayerAction } from './action';
import type { Spot } from './spot';

export type Street = 'flop' | 'turn' | 'river' | 'showdown';

export interface GameState {
  gameId: string;
  spot: Spot;
  players: Player[];
  street: Street;
  board: Card[];          // フロップ3枚 + ターン + リバー
  pot: number;            // 現在のポットサイズ（BB単位）
  currentPlayerIndex: number; // アクション順のインデックス
  actionHistory: PlayerAction[];
  isFinished: boolean;
  winners?: string[];     // 勝者のplayerId
}
