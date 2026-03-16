import type { HandStr } from '../constants/handRanges';
import type { ParsedHand } from '../types/hand';

/**
 * HandStr（例: "AKs", "AKo", "AA"）をパースして ParsedHand に変換する
 *
 * 規則:
 *   - 末尾が 's' → suited（スーテッド）
 *   - 末尾が 'o' → offsuit（オフスート）
 *   - 2文字で同じランク → pocket（ポケットペア）
 *
 * @throws 不正な形式の場合
 */
export function parseHandStr(handStr: HandStr): ParsedHand {
  // TODO: 実装する
  throw new Error('Not implemented');
}
