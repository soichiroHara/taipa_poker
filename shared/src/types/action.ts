export type ActionType = 'fold' | 'check' | 'call' | 'bet' | 'raise' | 'allin';

export interface PlayerAction {
  playerId: string;
  actionType: ActionType;
  amount?: number; // bet/raise/allin の場合
  timestamp: number;
}
