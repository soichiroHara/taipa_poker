import type { HandRange, HandStr } from '../../../../shared/src/constants/handRanges';
import type { Card } from '../../../../shared/src/constants/deck';
import { convertHandStrToCardType, parsedHandToCards } from './parseHandStr';

export type DealAction = 'raise' | 'call';

/**
 * 重み付きランダム選択
 * items: 選択対象の配列
 * getWeight: 各要素の重みを返す関数（0以上の数値）
 * 重みの合計が0の場合は null を返す
 */
function weightedRandom<T>(items: readonly T[], getWeight: (item: T) => number): T | null {
  const totalWeight = items.reduce((sum, item) => sum + getWeight(item), 0);

  if (totalWeight === 0) return null;

  let rand = Math.random() * totalWeight;

  for (const item of items) {
    rand -= getWeight(item);
    if (rand <= 0) return item;
  }

  // フォールバック（浮動小数点誤差対策）
  return items[items.length - 1];
}

/**
 * レンジからランダムに1つのhandStrを選ぶ
 * action に応じて raiseFrequency / callFrequency を重みとして加重ランダム選択する
 */
function pickHandStrFromRange(range: HandRange, action: DealAction): HandStr {
  const getWeight = (hand: HandRange[number]) =>
    action === 'raise' ? hand.raiseFrequency : hand.callFrequency;

  const selected = weightedRandom(range, getWeight);

  if (selected === null) {
    throw new Error(`No hands found for action: ${action}`);
  }

  return selected.handStr;
}

/**
 * 任意のハンドレンジからCard2枚をデッキより取り出す
 * デッキに該当カードがなければ再抽選する
 * action: 'raise' = raiseFrequency を重みに使う
 *         'call'  = callFrequency を重みに使う
 */
export function dealHands(
  range: HandRange,
  deck: Card[],
  action: DealAction = 'raise',
): [Card, Card] {
  while (true) {
    const handStr = pickHandStrFromRange(range, action);
    const parsed = convertHandStrToCardType(handStr);
    const dealtHand = parsedHandToCards(parsed, deck);

    if (dealtHand !== null) {
      const [card1, card2] = dealtHand;

      const index1 = deck.findIndex(
        (card) => card.cardnumber === card1.cardnumber && card.suit === card1.suit,
      );
      const index2 = deck.findIndex(
        (card) => card.cardnumber === card2.cardnumber && card.suit === card2.suit,
      );

      // spliceで要素を削除するとき、小さいindexから削除すると後ろの要素の位置がずれる
      // そのため大きいindex(highIndex)から先に削除する
      const [highIndex, lowIndex] = index1 > index2 ? [index1, index2] : [index2, index1];
      deck.splice(highIndex, 1);
      deck.splice(lowIndex, 1);
      return [card1, card2];
    }
  }
}
