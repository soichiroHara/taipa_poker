import { Position } from './player';

// SRP = Single Raised Pot, 3BP = 3-Bet Pot, 4BP = 4-Bet Pot
export type PotType = 'SRP' | '3BP' | '4BP';

export interface Spot {
  id: string;
  name: string;           // 例: "UTG vs CO SRP"
  positions: Position[];  // 参加ポジション
  potType: PotType;
  effectiveStack: number; // BB単位
  potSize: number;        // BB単位（フロップ開始時のポットサイズ）
  // 各ポジションの初期スタック（BB単位）
  stacksByPosition: Partial<Record<Position, number>>;
}
