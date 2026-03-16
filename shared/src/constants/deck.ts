export type Suit = 'spades' | 'hearts' | 'diamonds' | 'clubs';

export type CardNumber =
  | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  | 'T' | 'J' | 'Q' | 'K' | 'A';

export interface Card {
  cardnumber: CardNumber;
  suit: Suit;
}

const Card_NUMBERS: CardNumber[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const SUITS: Suit[] = ['spades', 'hearts', 'diamonds', 'clubs'];

/**
 * 標準52枚デッキ
 * スート順 × ランク順で並んでいる（シャッフルは使用側で行う）
 */
export const FULL_DECK: readonly Card[] = SUITS.flatMap((suit) =>
  Card_NUMBERS.map((cardnumber): Card => ({ cardnumber, suit })),
);
