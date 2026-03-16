import type { CardNumber } from '../constants/deck';

/**
 * ハンドの種別
 * - suited:  スーテッド（同スート）例: AKs
 * - offsuit: オフスート（異スート）例: AKo
 * - pocket:  ポケットペア（同ランク）例: AA
 */
export type HandType = 'suited' | 'offsuit' | 'pocket';

/**
 * HandStr（例: "AKs"）をパースした結果
 */
export interface ParsedHand {
  handCard1: CardNumber;
  handCard2: CardNumber;
  type: HandType;
}
