import { Card } from './card';

export type Position =
  | 'UTG'
  | 'UTG+1'
  | 'UTG+2'
  | 'LJ'
  | 'HJ'
  | 'CO'
  | 'BTN'
  | 'SB'
  | 'BB';

export interface Hand {
  cards: [Card, Card];
}

export interface Player {
  id: string;
  name: string;
  position: Position;
  stackSize: number;
  hand: Hand | null; // null = not visible to others
  isActive: boolean;
  isFolded: boolean;
  currentBet: number;
}
