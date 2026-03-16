/**
 * ハンド表記の規則:
 * - ペア:       "AA", "KK", "QQ" ...
 * - スーテッド:  "AKs", "AQs", "T9s" ...（同スート）
 * - オフスート:  "AKo", "AQo", "T9o" ...（異スート）
 */
export type HandStr = string;

/**
 * 頻度付きハンド
 * frequency: 0.0 ~ 1.0（1.0 = 100%でオープン）
 */
export type HandWithFrequency = {
  handStr: HandStr;
  frequency: number;
};

/**
 * ハンド群（レンジ）
 */
export type HandRange = readonly HandWithFrequency[];

// ============================================================
// ポジション別オープンレンジ（100BB, 9-handed想定, NL50rake）
// ============================================================

export const UTG_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  frequency: 1.0 },
  { handStr: 'KK',  frequency: 1.0 },
  { handStr: 'QQ',  frequency: 1.0 },
  { handStr: 'JJ',  frequency: 1.0 },
  { handStr: 'TT',  frequency: 1.0 },
  { handStr: '99',  frequency: 1.0 },
  { handStr: '88',  frequency: 1.0 },
  { handStr: '77',  frequency: 1.0 },
  { handStr: '66',  frequency: 1.0 },
  { handStr: '55',  frequency: 0.5 },
  { handStr: '44',  frequency: 0.2 },
  { handStr: '33',  frequency: 0.2 },
  { handStr: '22',  frequency: 0.2 },
  // Aスーテッド
  { handStr: 'AKs', frequency: 1.0 },
  { handStr: 'AQs', frequency: 1.0 },
  { handStr: 'AJs', frequency: 1.0 },
  { handStr: 'ATs', frequency: 1.0 },
  { handStr: 'A9s', frequency: 1.0 },
  { handStr: 'A8s', frequency: 1.0 },
  { handStr: 'A7s', frequency: 1.0 },
  { handStr: 'A6s', frequency: 1.0 },
  { handStr: 'A5s', frequency: 1.0 },
  { handStr: 'A4s', frequency: 1.0 },
  { handStr: 'A3s', frequency: 1.0 },
  { handStr: 'A2s', frequency: 0.4 },
  // Kスーテッド
  { handStr: 'KQs', frequency: 1.0 },
  { handStr: 'KJs', frequency: 1.0 },
  { handStr: 'KTs', frequency: 1.0 },
  { handStr: 'K9s', frequency: 1.0 },
  { handStr: 'K8s', frequency: 1.0 },
  { handStr: 'K7s', frequency: 0.7 },
  { handStr: 'K6s', frequency: 0.5 },
  { handStr: 'K5s', frequency: 0.5 },
  // Qスーテッド
  { handStr: 'QJs', frequency: 1.0 },
  { handStr: 'QTs', frequency: 1.0 },
  { handStr: 'Q9s', frequency: 1.0 },
  { handStr: 'Q8s', frequency: 0.1 },
  // Jスーテッド
  { handStr: 'JTs', frequency: 1.0 },
  { handStr: 'J9s', frequency: 0.6 },
  // Tスーテッド
  { handStr: 'T9s', frequency: 1.0 },
  // 9スーテッド
  { handStr: '98s', frequency: 0.1 },
  // 8スーテッド
  { handStr: '87s', frequency: 0.1 },
  // 7スーテッド
  { handStr: '76s', frequency: 0.1 },
  // 6スーテッド
  { handStr: '65s', frequency: 0.5 },
  // 5スーテッド
  { handStr: '54s', frequency: 0.1 },
  // オフスート
  { handStr: 'AKo', frequency: 1.0 },
  { handStr: 'AQo', frequency: 1.0 },
  { handStr: 'AJo', frequency: 1.0 },
  { handStr: 'ATo', frequency: 1.0 },
  { handStr: 'KQo', frequency: 1.0 },
  { handStr: 'KJo', frequency: 0.8 },
  { handStr: 'QJo', frequency: 0.4 },
] as const;

export const UTG1_OPEN_RANGE: HandRange = [
  { handStr: 'AA',  frequency: 1.0 },
  { handStr: 'KK',  frequency: 1.0 },
  { handStr: 'QQ',  frequency: 1.0 },
  { handStr: 'JJ',  frequency: 1.0 },
  { handStr: 'TT',  frequency: 1.0 },
  { handStr: '99',  frequency: 1.0 },
  { handStr: '88',  frequency: 1.0 },
  { handStr: 'AKs', frequency: 1.0 },
  { handStr: 'AQs', frequency: 1.0 },
  { handStr: 'AJs', frequency: 1.0 },
  { handStr: 'ATs', frequency: 1.0 },
  { handStr: 'A9s', frequency: 1.0 },
  { handStr: 'KQs', frequency: 1.0 },
  { handStr: 'KJs', frequency: 1.0 },
  { handStr: 'KTs', frequency: 1.0 },
  { handStr: 'QJs', frequency: 1.0 },
  { handStr: 'QTs', frequency: 1.0 },
  { handStr: 'JTs', frequency: 1.0 },
  { handStr: 'AKo', frequency: 1.0 },
  { handStr: 'AQo', frequency: 1.0 },
  { handStr: 'AJo', frequency: 0.5 },
] as const;

export const LJ_OPEN_RANGE: HandRange = [
  { handStr: 'AA',  frequency: 1.0 },
  { handStr: 'KK',  frequency: 1.0 },
  { handStr: 'QQ',  frequency: 1.0 },
  { handStr: 'JJ',  frequency: 1.0 },
  { handStr: 'TT',  frequency: 1.0 },
  { handStr: '99',  frequency: 1.0 },
  { handStr: '88',  frequency: 1.0 },
  { handStr: '77',  frequency: 1.0 },
  { handStr: 'AKs', frequency: 1.0 },
  { handStr: 'AQs', frequency: 1.0 },
  { handStr: 'AJs', frequency: 1.0 },
  { handStr: 'ATs', frequency: 1.0 },
  { handStr: 'A9s', frequency: 1.0 },
  { handStr: 'A8s', frequency: 1.0 },
  { handStr: 'KQs', frequency: 1.0 },
  { handStr: 'KJs', frequency: 1.0 },
  { handStr: 'KTs', frequency: 1.0 },
  { handStr: 'QJs', frequency: 1.0 },
  { handStr: 'QTs', frequency: 1.0 },
  { handStr: 'JTs', frequency: 1.0 },
  { handStr: 'J9s', frequency: 0.5 },
  { handStr: 'T9s', frequency: 1.0 },
  { handStr: 'AKo', frequency: 1.0 },
  { handStr: 'AQo', frequency: 1.0 },
  { handStr: 'AJo', frequency: 1.0 },
  { handStr: 'ATo', frequency: 0.5 },
  { handStr: 'KQo', frequency: 1.0 },
] as const;

export const HJ_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  frequency: 1.0 },
  { handStr: 'KK',  frequency: 1.0 },
  { handStr: 'QQ',  frequency: 1.0 },
  { handStr: 'JJ',  frequency: 1.0 },
  { handStr: 'TT',  frequency: 1.0 },
  { handStr: '99',  frequency: 1.0 },
  { handStr: '88',  frequency: 1.0 },
  { handStr: '77',  frequency: 1.0 },
  { handStr: '66',  frequency: 1.0 },
  { handStr: '55',  frequency: 1.0 },
  { handStr: '44',  frequency: 0.5 },
  { handStr: '33',  frequency: 0.2 },
  { handStr: '22',  frequency: 0.2 },
  // Aスーテッド
  { handStr: 'AKs', frequency: 1.0 },
  { handStr: 'AQs', frequency: 1.0 },
  { handStr: 'AJs', frequency: 1.0 },
  { handStr: 'ATs', frequency: 1.0 },
  { handStr: 'A9s', frequency: 1.0 },
  { handStr: 'A8s', frequency: 1.0 },
  { handStr: 'A7s', frequency: 1.0 },
  { handStr: 'A6s', frequency: 1.0 },
  { handStr: 'A5s', frequency: 1.0 },
  { handStr: 'A4s', frequency: 1.0 },
  { handStr: 'A3s', frequency: 1.0 },
  { handStr: 'A2s', frequency: 1.0 },
  // Kスーテッド
  { handStr: 'KQs', frequency: 1.0 },
  { handStr: 'KJs', frequency: 1.0 },
  { handStr: 'KTs', frequency: 1.0 },
  { handStr: 'K9s', frequency: 1.0 },
  { handStr: 'K8s', frequency: 1.0 },
  { handStr: 'K7s', frequency: 1.0 },
  { handStr: 'K6s', frequency: 1.0 },
  { handStr: 'K5s', frequency: 0.9 },
  // Qスーテッド
  { handStr: 'QJs', frequency: 1.0 },
  { handStr: 'QTs', frequency: 1.0 },
  { handStr: 'Q9s', frequency: 1.0 },
  { handStr: 'Q8s', frequency: 0.8 },
  // Jスーテッド
  { handStr: 'JTs', frequency: 1.0 },
  { handStr: 'J9s', frequency: 1.0 },
  { handStr: 'J8s', frequency: 0.1 },
  // Tスーテッド
  { handStr: 'T9s', frequency: 1.0 },
  { handStr: 'T8s', frequency: 0.6 },
  // 9スーテッド
  { handStr: '98s', frequency: 0.8 },
  // 8スーテッド
  { handStr: '87s', frequency: 0.1 },
  // 7スーテッド
  { handStr: '76s', frequency: 0.1 },
  // 6スーテッド
  { handStr: '65s', frequency: 0.1 },
  // オフスート
  { handStr: 'AKo', frequency: 1.0 },
  { handStr: 'AQo', frequency: 1.0 },
  { handStr: 'AJo', frequency: 1.0 },
  { handStr: 'ATo', frequency: 1.0 },
  { handStr: 'A9o', frequency: 0.6 },
  { handStr: 'KQo', frequency: 1.0 },
  { handStr: 'KJo', frequency: 1.0 },
  { handStr: 'KTo', frequency: 0.7 },
  { handStr: 'QJo', frequency: 1.0 },
  { handStr: 'QTo', frequency: 0.3 },
  { handStr: 'JTo', frequency: 0.2 },
] as const;

export const CO_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  frequency: 1.0 },
  { handStr: 'KK',  frequency: 1.0 },
  { handStr: 'QQ',  frequency: 1.0 },
  { handStr: 'JJ',  frequency: 1.0 },
  { handStr: 'TT',  frequency: 1.0 },
  { handStr: '99',  frequency: 1.0 },
  { handStr: '88',  frequency: 1.0 },
  { handStr: '77',  frequency: 1.0 },
  { handStr: '66',  frequency: 1.0 },
  { handStr: '55',  frequency: 1.0 },
  { handStr: '44',  frequency: 1.0 },
  { handStr: '33',  frequency: 0.2 },
  { handStr: '22',  frequency: 0.3 },
  // Aスーテッド
  { handStr: 'AKs', frequency: 1.0 },
  { handStr: 'AQs', frequency: 1.0 },
  { handStr: 'AJs', frequency: 1.0 },
  { handStr: 'ATs', frequency: 1.0 },
  { handStr: 'A9s', frequency: 1.0 },
  { handStr: 'A8s', frequency: 1.0 },
  { handStr: 'A7s', frequency: 1.0 },
  { handStr: 'A6s', frequency: 1.0 },
  { handStr: 'A5s', frequency: 1.0 },
  { handStr: 'A4s', frequency: 1.0 },
  { handStr: 'A3s', frequency: 1.0 },
  { handStr: 'A2s', frequency: 1.0 },
  // Kスーテッド
  { handStr: 'KQs', frequency: 1.0 },
  { handStr: 'KJs', frequency: 1.0 },
  { handStr: 'KTs', frequency: 1.0 },
  { handStr: 'K9s', frequency: 1.0 },
  { handStr: 'K8s', frequency: 1.0 },
  { handStr: 'K7s', frequency: 1.0 },
  { handStr: 'K6s', frequency: 1.0 },
  { handStr: 'K5s', frequency: 1.0 },
  { handStr: 'K4s', frequency: 1.0 },
  { handStr: 'K3s', frequency: 1.0 },
  { handStr: 'K2s', frequency: 0.5 },
  // Qスーテッド
  { handStr: 'QJs', frequency: 1.0 },
  { handStr: 'QTs', frequency: 1.0 },
  { handStr: 'Q9s', frequency: 1.0 },
  { handStr: 'Q8s', frequency: 1.0 },
  { handStr: 'Q7s', frequency: 1.0 },
  { handStr: 'Q6s', frequency: 1.0 },
  { handStr: 'Q5s', frequency: 1.0 },
  // Jスーテッド
  { handStr: 'JTs', frequency: 1.0 },
  { handStr: 'J9s', frequency: 1.0 },
  { handStr: 'J8s', frequency: 1.0 },
  { handStr: 'J7s', frequency: 1.0 },
  { handStr: 'J6s', frequency: 0.1 },
  // Tスーテッド
  { handStr: 'T9s', frequency: 1.0 },
  { handStr: 'T8s', frequency: 1.0 },
  { handStr: 'T7s', frequency: 0.2 },
  // 9スーテッド
  { handStr: '98s', frequency: 1.0 },
  { handStr: '97s', frequency: 1.0 },
  // 8スーテッド
  { handStr: '87s', frequency: 0.8 },
  // 7スーテッド
  { handStr: '76s', frequency: 0.2 },
  // 6スーテッド
  { handStr: '65s', frequency: 0.2 },
  // 5スーテッド
  { handStr: '54s', frequency: 0.1 },
  // オフスート
  { handStr: 'AKo', frequency: 1.0 },
  { handStr: 'AQo', frequency: 1.0 },
  { handStr: 'AJo', frequency: 1.0 },
  { handStr: 'ATo', frequency: 1.0 },
  { handStr: 'A9o', frequency: 1.0 },
  { handStr: 'A8o', frequency: 1.0 },
  { handStr: 'A5o', frequency: 0.8 },
  { handStr: 'KQo', frequency: 1.0 },
  { handStr: 'KJo', frequency: 1.0 },
  { handStr: 'KTo', frequency: 1.0 },
  { handStr: 'K9o', frequency: 0.2 },
  { handStr: 'QJo', frequency: 1.0 },
  { handStr: 'QTo', frequency: 1.0 },
  { handStr: 'JTo', frequency: 1.0 },
  { handStr: 'J9o', frequency: 0.1 },
] as const;

export const BTN_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  frequency: 1.0 },
  { handStr: 'KK',  frequency: 1.0 },
  { handStr: 'QQ',  frequency: 1.0 },
  { handStr: 'JJ',  frequency: 1.0 },
  { handStr: 'TT',  frequency: 1.0 },
  { handStr: '99',  frequency: 1.0 },
  { handStr: '88',  frequency: 1.0 },
  { handStr: '77',  frequency: 1.0 },
  { handStr: '66',  frequency: 1.0 },
  { handStr: '55',  frequency: 1.0 },
  { handStr: '44',  frequency: 1.0 },
  { handStr: '33',  frequency: 1.0 },
  { handStr: '22',  frequency: 1.0 },
  // Aスーテッド
  { handStr: 'AKs', frequency: 1.0 },
  { handStr: 'AQs', frequency: 1.0 },
  { handStr: 'AJs', frequency: 1.0 },
  { handStr: 'ATs', frequency: 1.0 },
  { handStr: 'A9s', frequency: 1.0 },
  { handStr: 'A8s', frequency: 1.0 },
  { handStr: 'A7s', frequency: 1.0 },
  { handStr: 'A6s', frequency: 1.0 },
  { handStr: 'A5s', frequency: 1.0 },
  { handStr: 'A4s', frequency: 1.0 },
  { handStr: 'A3s', frequency: 1.0 },
  { handStr: 'A2s', frequency: 1.0 },
  // Kスーテッド
  { handStr: 'KQs', frequency: 1.0 },
  { handStr: 'KJs', frequency: 1.0 },
  { handStr: 'KTs', frequency: 1.0 },
  { handStr: 'K9s', frequency: 1.0 },
  { handStr: 'K8s', frequency: 1.0 },
  { handStr: 'K7s', frequency: 1.0 },
  { handStr: 'K6s', frequency: 1.0 },
  { handStr: 'K5s', frequency: 1.0 },
  { handStr: 'K4s', frequency: 1.0 },
  { handStr: 'K3s', frequency: 1.0 },
  { handStr: 'K2s', frequency: 1.0 },
  // Qスーテッド
  { handStr: 'QJs', frequency: 1.0 },
  { handStr: 'QTs', frequency: 1.0 },
  { handStr: 'Q9s', frequency: 1.0 },
  { handStr: 'Q8s', frequency: 1.0 },
  { handStr: 'Q7s', frequency: 1.0 },
  { handStr: 'Q6s', frequency: 1.0 },
  { handStr: 'Q5s', frequency: 1.0 },
  { handStr: 'Q4s', frequency: 1.0 },
  { handStr: 'Q3s', frequency: 1.0 },
  { handStr: 'Q2s', frequency: 0.9 },
  // Jスーテッド
  { handStr: 'JTs', frequency: 1.0 },
  { handStr: 'J9s', frequency: 1.0 },
  { handStr: 'J8s', frequency: 1.0 },
  { handStr: 'J7s', frequency: 1.0 },
  { handStr: 'J6s', frequency: 1.0 },
  { handStr: 'J5s', frequency: 1.0 },
  { handStr: 'J4s', frequency: 0.7 },
  // Tスーテッド
  { handStr: 'T9s', frequency: 1.0 },
  { handStr: 'T8s', frequency: 1.0 },
  { handStr: 'T7s', frequency: 1.0 },
  { handStr: 'T6s', frequency: 1.0 },
  // 9スーテッド
  { handStr: '98s', frequency: 1.0 },
  { handStr: '97s', frequency: 1.0 },
  { handStr: '96s', frequency: 1.0 },
  // 8スーテッド
  { handStr: '87s', frequency: 1.0 },
  { handStr: '86s', frequency: 1.0 },
  // 7スーテッド
  { handStr: '76s', frequency: 1.0 },
  { handStr: '75s', frequency: 0.8 },
  // 6スーテッド
  { handStr: '65s', frequency: 1.0 },
  // 5スーテッド
  { handStr: '54s', frequency: 0.7 },
  // オフスート
  { handStr: 'AKo', frequency: 1.0 },
  { handStr: 'AQo', frequency: 1.0 },
  { handStr: 'AJo', frequency: 1.0 },
  { handStr: 'ATo', frequency: 1.0 },
  { handStr: 'A9o', frequency: 1.0 },
  { handStr: 'A8o', frequency: 1.0 },
  { handStr: 'A7o', frequency: 1.0 },
  { handStr: 'A6o', frequency: 1.0 },
  { handStr: 'A5o', frequency: 1.0 },
  { handStr: 'A4o', frequency: 1.0 },
  { handStr: 'A3o', frequency: 0.7 },
  { handStr: 'KQo', frequency: 1.0 },
  { handStr: 'KJo', frequency: 1.0 },
  { handStr: 'KTo', frequency: 1.0 },
  { handStr: 'K9o', frequency: 1.0 },
  { handStr: 'K8o', frequency: 0.7 },
  { handStr: 'K7o', frequency: 0.2 },
  { handStr: 'QJo', frequency: 1.0 },
  { handStr: 'QTo', frequency: 1.0 },
  { handStr: 'Q9o', frequency: 1.0 },
  { handStr: 'JTo', frequency: 1.0 },
  { handStr: 'J9o', frequency: 1.0 },
  { handStr: 'J8o', frequency: 0.2 },
  { handStr: 'T9o', frequency: 1.0 },
  { handStr: 'T8o', frequency: 0.7 },
] as const;

export const SB_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  frequency: 1.0 },
  { handStr: 'KK',  frequency: 1.0 },
  { handStr: 'QQ',  frequency: 1.0 },
  { handStr: 'JJ',  frequency: 1.0 },
  { handStr: 'TT',  frequency: 1.0 },
  { handStr: '99',  frequency: 1.0 },
  { handStr: '88',  frequency: 1.0 },
  { handStr: '77',  frequency: 1.0 },
  { handStr: '66',  frequency: 1.0 },
  { handStr: '55',  frequency: 1.0 },
  { handStr: '44',  frequency: 1.0 },
  { handStr: '33',  frequency: 1.0 },
  { handStr: '22',  frequency: 1.0 },
  // Aスーテッド
  { handStr: 'AKs', frequency: 1.0 },
  { handStr: 'AQs', frequency: 1.0 },
  { handStr: 'AJs', frequency: 1.0 },
  { handStr: 'ATs', frequency: 1.0 },
  { handStr: 'A9s', frequency: 1.0 },
  { handStr: 'A8s', frequency: 1.0 },
  { handStr: 'A7s', frequency: 1.0 },
  { handStr: 'A6s', frequency: 1.0 },
  { handStr: 'A5s', frequency: 1.0 },
  { handStr: 'A4s', frequency: 1.0 },
  { handStr: 'A3s', frequency: 1.0 },
  { handStr: 'A2s', frequency: 1.0 },
  // Kスーテッド
  { handStr: 'KQs', frequency: 1.0 },
  { handStr: 'KJs', frequency: 1.0 },
  { handStr: 'KTs', frequency: 1.0 },
  { handStr: 'K9s', frequency: 1.0 },
  { handStr: 'K8s', frequency: 1.0 },
  { handStr: 'K7s', frequency: 1.0 },
  { handStr: 'K6s', frequency: 1.0 },
  { handStr: 'K5s', frequency: 1.0 },
  { handStr: 'K4s', frequency: 1.0 },
  { handStr: 'K3s', frequency: 1.0 },
  { handStr: 'K2s', frequency: 1.0 },
  // Qスーテッド
  { handStr: 'QJs', frequency: 1.0 },
  { handStr: 'QTs', frequency: 1.0 },
  { handStr: 'Q9s', frequency: 1.0 },
  { handStr: 'Q8s', frequency: 1.0 },
  { handStr: 'Q7s', frequency: 1.0 },
  { handStr: 'Q6s', frequency: 1.0 },
  { handStr: 'Q5s', frequency: 1.0 },
  { handStr: 'Q4s', frequency: 1.0 },
  { handStr: 'Q3s', frequency: 1.0 },
  { handStr: 'Q2s', frequency: 1.0 },
  // Jスーテッド
  { handStr: 'JTs', frequency: 1.0 },
  { handStr: 'J9s', frequency: 1.0 },
  { handStr: 'J8s', frequency: 1.0 },
  { handStr: 'J7s', frequency: 1.0 },
  { handStr: 'J6s', frequency: 1.0 },
  { handStr: 'J5s', frequency: 1.0 },
  { handStr: 'J4s', frequency: 1.0 },
  { handStr: 'J3s', frequency: 1.0 },
  { handStr: 'J2s', frequency: 0.2 },
  // Tスーテッド
  { handStr: 'T9s', frequency: 1.0 },
  { handStr: 'T8s', frequency: 1.0 },
  { handStr: 'T7s', frequency: 1.0 },
  { handStr: 'T6s', frequency: 1.0 },
  { handStr: 'T5s', frequency: 1.0 },
  { handStr: 'T4s', frequency: 0.2 },
  // 9スーテッド
  { handStr: '98s', frequency: 1.0 },
  { handStr: '97s', frequency: 1.0 },
  { handStr: '96s', frequency: 1.0 },
  { handStr: '95s', frequency: 1.0 },
  // 8スーテッド
  { handStr: '87s', frequency: 1.0 },
  { handStr: '86s', frequency: 1.0 },
  { handStr: '85s', frequency: 1.0 },
  // 7スーテッド
  { handStr: '76s', frequency: 1.0 },
  { handStr: '75s', frequency: 1.0 },
  { handStr: '74s', frequency: 1.0 },
  // 6スーテッド
  { handStr: '65s', frequency: 1.0 },
  { handStr: '64s', frequency: 1.0 },
  // 5スーテッド
  { handStr: '54s', frequency: 1.0 },
  { handStr: '53s', frequency: 1.0 },
  // 4スーテッド

  // オフスート
  { handStr: 'AKo', frequency: 1.0 },
  { handStr: 'AQo', frequency: 1.0 },
  { handStr: 'AJo', frequency: 1.0 },
  { handStr: 'ATo', frequency: 1.0 },
  { handStr: 'A9o', frequency: 1.0 },
  { handStr: 'A8o', frequency: 1.0 },
  { handStr: 'A7o', frequency: 1.0 },
  { handStr: 'A6o', frequency: 1.0 },
  { handStr: 'A5o', frequency: 1.0 },
  { handStr: 'A4o', frequency: 1.0 },
  { handStr: 'A3o', frequency: 1.0 },
  { handStr: 'A2o', frequency: 0.2 },
  { handStr: 'KQo', frequency: 1.0 },
  { handStr: 'KJo', frequency: 1.0 },
  { handStr: 'KTo', frequency: 1.0 },
  { handStr: 'K9o', frequency: 1.0 },
  { handStr: 'K8o', frequency: 1.0 },
  { handStr: 'K7o', frequency: 0.4 },
  { handStr: 'QJo', frequency: 1.0 },
  { handStr: 'QTo', frequency: 1.0 },
  { handStr: 'Q9o', frequency: 1.0 },
  { handStr: 'Q8o', frequency: 0.8 },
  { handStr: 'JTo', frequency: 1.0 },
  { handStr: 'J9o', frequency: 1.0 },
  { handStr: 'J8o', frequency: 0.6 },
  { handStr: 'T9o', frequency: 1.0 },
  { handStr: 'T8o', frequency: 1.0 },
  { handStr: '98o', frequency: 1.0 },
  { handStr: '87o', frequency: 0.2 },
] as const;

// ============================================================
// スポット別レンジマップ
// ============================================================

export const POSITION_OPEN_RANGES: Record<string, HandRange> = {
  UTG: UTG_OPEN_RANGE,
  'UTG+1': UTG1_OPEN_RANGE,
  LJ: LJ_OPEN_RANGE,
  HJ: HJ_OPEN_RANGE,
  CO: CO_OPEN_RANGE,
  BTN: BTN_OPEN_RANGE,
  SB: SB_OPEN_RANGE,
};
