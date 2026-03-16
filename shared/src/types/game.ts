import { Card } from './card';
import { Player } from './player';
import { PlayerAction } from './action';
import { Spot } from './spot';

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
