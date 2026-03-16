import type { Card, HandRange } from '@taipa-poker/shared';

/**
 * ハンド群（レンジ）からランダムに1ハンド（Card2枚）を配る
 *
 * @param range    配布対象のハンド群
 * @param usedCards 既に使用済みのカード（重複を避けるため）
 * @returns Card2枚のタプル
 */
export function dealHands(range: HandRange, usedCards: Card[]): [Card, Card] {
  // TODO: 実装する
  throw new Error('Not implemented');
}
