export type Suit = 'spades' | 'hearts' | 'diamonds' | 'clubs';

export type Rank =
  | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  | 'T' | 'J' | 'Q' | 'K' | 'A';

export interface Card {
  rank: Rank;
  suit: Suit;
}

const RANK_NUMBERS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const SUITS: Suit[] = ['spades', 'hearts', 'diamonds', 'clubs'];

/**
 * 標準52枚デッキ
 * スート順 × ランク順で並んでいる（シャッフルは使用側で行う）
 */
export const FULL_DECK: readonly Card[] = SUITS.flatMap((suit) =>
  RANK_NUMBERS.map((rank): Card => ({ rank, suit })),
);
