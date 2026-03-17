import type { HandRange, HandStr } from '../../../../shared/src/constants/handRanges';
import type { Card } from '../../../../shared/src/constants/deck';
import { convertHandStrToCardType, parsedHandToCards } from './parseHandStr';

/**
 * レンジからランダムに1つのhandStrを選ぶ
 */
function pickHandStrFromRange(range: HandRange): HandStr {
  const index = Math.floor(Math.random() * range.length);
  return range[index].handStr;
}

/**
 * 任意のハンドレンジからCard2枚をデッキより取り出す
 * デッキに該当カードがなければ再抽選する
 */
export function dealHands(range: HandRange, deck: Card[]): [Card, Card] {
  while (true) {
    const handStr = pickHandStrFromRange(range);
    const parsed = convertHandStrToCardType(handStr);
    const dealtHand = parsedHandToCards(parsed, deck);

    if (dealtHand !== null) {
      const [card1, card2] = dealtHand;

      // デッキ内でcard1とcard2が何番目にあるかを取得する
      const index1 = deck.findIndex((c) => c.cardnumber === card1.cardnumber && c.suit === card1.suit);
      const index2 = deck.findIndex((c) => c.cardnumber === card2.cardnumber && c.suit === card2.suit);

      // spliceで要素を削除するとき、小さいindexから削除すると後ろの要素の位置がずれる
      // そのため大きいindex(hi)から先に削除する
      const [hi, lo] = index1 > index2 ? [index1, index2] : [index2, index1];
      deck.splice(hi, 1);
      deck.splice(lo, 1);
      return [card1, card2];
    }
    // nullなら再抽選（デッキに該当カードがなかった場合）
  }
}
