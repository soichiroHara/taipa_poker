import type { Card, CardNumber, Suit } from '../../../../shared/src/constants/deck';
import type { HandStr } from '../../../../shared/src/constants/handRanges';
import type { ParsedHand } from '../../../../shared/src/types/hand';

/**
 * HandStr（例: "AKs", "AKo", "AA"）をパースして ParsedHand に変換する
 */
export function convertHandStrToCardType(handStr: HandStr): ParsedHand {
  const last = handStr[handStr.length - 1];

  if (last === 's') {
    return {
      handCard1: handStr[0] as CardNumber,
      handCard2: handStr[1] as CardNumber,
      type: 'suited',
    };
  }

  if (last === 'o') {
    return {
      handCard1: handStr[0] as CardNumber,
      handCard2: handStr[1] as CardNumber,
      type: 'offsuit',
    };
  }

  // ポケットペア（例: "AA", "KK"）
  return {
    handCard1: handStr[0] as CardNumber,
    handCard2: handStr[1] as CardNumber,
    type: 'pocket',
  };
}

/**
 * ParsedHandとデッキからCard2枚を取得する
 * デッキに残っているカードの中から選ぶ
 * 見つからない場合はnullを返す（dealHands側で再抽選する）
 */
export function parsedHandToCards(parsed: ParsedHand, deck: Card[]): [Card, Card] | null {
  const suits: Suit[] = ['spades', 'hearts', 'diamonds', 'clubs'];
  const shuffledSuits = [...suits].sort(() => Math.random() - 0.5);

  if (parsed.type === 'suited') {
    for (const suit of shuffledSuits) {
      const c1 = deck.find((c) => c.cardnumber === parsed.handCard1 && c.suit === suit);
      const c2 = deck.find((c) => c.cardnumber === parsed.handCard2 && c.suit === suit);
      if (c1 && c2) return [c1, c2];
    }
    return null;
  }

  if (parsed.type === 'offsuit') {
    for (const suit1 of shuffledSuits) {
      const c1 = deck.find((c) => c.cardnumber === parsed.handCard1 && c.suit === suit1);
      if (!c1) continue;
      for (const suit2 of shuffledSuits.filter((s) => s !== suit1)) {
        const c2 = deck.find((c) => c.cardnumber === parsed.handCard2 && c.suit === suit2);
        if (c2) return [c1, c2];
      }
    }
    return null;
  }

  // pocket: 同ランク・異スート2枚
  const pocketCards = deck.filter((c) => c.cardnumber === parsed.handCard1);
  if (pocketCards.length < 2) return null;
  const [c1, c2] = [...pocketCards].sort(() => Math.random() - 0.5);
  return [c1, c2];
}
