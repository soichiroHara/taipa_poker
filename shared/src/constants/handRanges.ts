/**
 * ハンド表記の規則:
 * - ペア:       "AA", "KK", "QQ" ...
 * - スーテッド:  "AKs", "AQs", "T9s" ...（同スート）
 * - オフスート:  "AKo", "AQo", "T9o" ...（異スート）
 */
export type HandStr = string;

/**
 * 頻度付きハンド
 *
 * raiseFrequency: raise / 3bet / 4bet する頻度 (0.0〜1.0)
 * callFrequency:  call する頻度 (0.0〜1.0)
 * foldFrequency は 1 - raise - call で計算できるため省略
 *
 * 使用例:
 *   オープンレンジ: raiseFrequency = オープン頻度, callFrequency = 0
 *   コールレンジ:   raiseFrequency = 3bet頻度,    callFrequency = call頻度
 *   3betレンジ:     raiseFrequency = 3bet頻度,    callFrequency = 0
 *   vs 3bet レンジ: raiseFrequency = 4bet頻度,    callFrequency = call頻度
 */
export type HandWithFrequency = {
  handStr: HandStr;
  raiseFrequency: number;
  callFrequency: number;
};

/**
 * ハンド群（レンジ）
 */
export type HandRange = readonly HandWithFrequency[];

// ============================================================
// ポジション別オープンレンジ（100BB, 9-handed想定, NL50rake）
// オープンレンジは raiseFrequency = オープン頻度, callFrequency = 0
// ============================================================

export const UTG_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'TT',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '99',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '88',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '77',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '66',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '55',  raiseFrequency: 0.5, callFrequency: 0 },
  { handStr: '44',  raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: '33',  raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: '22',  raiseFrequency: 0.2, callFrequency: 0 },
  // Aスーテッド
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A2s', raiseFrequency: 0.4, callFrequency: 0 },
  // Kスーテッド
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K7s', raiseFrequency: 0.7, callFrequency: 0 },
  { handStr: 'K6s', raiseFrequency: 0.5, callFrequency: 0 },
  { handStr: 'K5s', raiseFrequency: 0.5, callFrequency: 0 },
  // Qスーテッド
  { handStr: 'QJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q8s', raiseFrequency: 0.1, callFrequency: 0 },
  // Jスーテッド
  { handStr: 'JTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9s', raiseFrequency: 0.6, callFrequency: 0 },
  // Tスーテッド
  { handStr: 'T9s', raiseFrequency: 1.0, callFrequency: 0 },
  // 9スーテッド
  { handStr: '98s', raiseFrequency: 0.1, callFrequency: 0 },
  // 8スーテッド
  { handStr: '87s', raiseFrequency: 0.1, callFrequency: 0 },
  // 7スーテッド
  { handStr: '76s', raiseFrequency: 0.1, callFrequency: 0 },
  // 6スーテッド
  { handStr: '65s', raiseFrequency: 0.5, callFrequency: 0 },
  // 5スーテッド
  { handStr: '54s', raiseFrequency: 0.1, callFrequency: 0 },
  // オフスート
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJo', raiseFrequency: 0.8, callFrequency: 0 },
  { handStr: 'QJo', raiseFrequency: 0.4, callFrequency: 0 },
] as const;

export const UTG1_OPEN_RANGE: HandRange = [
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'TT',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '99',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '88',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJo', raiseFrequency: 0.5, callFrequency: 0 },
] as const;

export const LJ_OPEN_RANGE: HandRange = [
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'TT',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '99',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '88',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '77',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9s', raiseFrequency: 0.5, callFrequency: 0 },
  { handStr: 'T9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATo', raiseFrequency: 0.5, callFrequency: 0 },
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0 },
] as const;

export const HJ_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'TT',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '99',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '88',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '77',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '66',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '55',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '44',  raiseFrequency: 0.5, callFrequency: 0 },
  { handStr: '33',  raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: '22',  raiseFrequency: 0.2, callFrequency: 0 },
  // Aスーテッド
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A2s', raiseFrequency: 1.0, callFrequency: 0 },
  // Kスーテッド
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K5s', raiseFrequency: 0.9, callFrequency: 0 },
  // Qスーテッド
  { handStr: 'QJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q8s', raiseFrequency: 0.8, callFrequency: 0 },
  // Jスーテッド
  { handStr: 'JTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J8s', raiseFrequency: 0.1, callFrequency: 0 },
  // Tスーテッド
  { handStr: 'T9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T8s', raiseFrequency: 0.6, callFrequency: 0 },
  // 9スーテッド
  { handStr: '98s', raiseFrequency: 0.8, callFrequency: 0 },
  // 8スーテッド
  { handStr: '87s', raiseFrequency: 0.1, callFrequency: 0 },
  // 7スーテッド
  { handStr: '76s', raiseFrequency: 0.1, callFrequency: 0 },
  // 6スーテッド
  { handStr: '65s', raiseFrequency: 0.1, callFrequency: 0 },
  // オフスート
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9o', raiseFrequency: 0.6, callFrequency: 0 },
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTo', raiseFrequency: 0.7, callFrequency: 0 },
  { handStr: 'QJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTo', raiseFrequency: 0.3, callFrequency: 0 },
  { handStr: 'JTo', raiseFrequency: 0.2, callFrequency: 0 },
] as const;

export const CO_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'TT',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '99',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '88',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '77',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '66',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '55',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '44',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '33',  raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: '22',  raiseFrequency: 0.3, callFrequency: 0 },
  // Aスーテッド
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A2s', raiseFrequency: 1.0, callFrequency: 0 },
  // Kスーテッド
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K2s', raiseFrequency: 0.5, callFrequency: 0 },
  // Qスーテッド
  { handStr: 'QJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q5s', raiseFrequency: 1.0, callFrequency: 0 },
  // Jスーテッド
  { handStr: 'JTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J6s', raiseFrequency: 0.1, callFrequency: 0 },
  // Tスーテッド
  { handStr: 'T9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T7s', raiseFrequency: 0.2, callFrequency: 0 },
  // 9スーテッド
  { handStr: '98s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '97s', raiseFrequency: 1.0, callFrequency: 0 },
  // 8スーテッド
  { handStr: '87s', raiseFrequency: 0.8, callFrequency: 0 },
  // 7スーテッド
  { handStr: '76s', raiseFrequency: 0.2, callFrequency: 0 },
  // 6スーテッド
  { handStr: '65s', raiseFrequency: 0.2, callFrequency: 0 },
  // 5スーテッド
  { handStr: '54s', raiseFrequency: 0.1, callFrequency: 0 },
  // オフスート
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5o', raiseFrequency: 0.8, callFrequency: 0 },
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9o', raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: 'QJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9o', raiseFrequency: 0.1, callFrequency: 0 },
] as const;

export const BTN_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'TT',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '99',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '88',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '77',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '66',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '55',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '44',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '33',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '22',  raiseFrequency: 1.0, callFrequency: 0 },
  // Aスーテッド
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A2s', raiseFrequency: 1.0, callFrequency: 0 },
  // Kスーテッド
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K2s', raiseFrequency: 1.0, callFrequency: 0 },
  // Qスーテッド
  { handStr: 'QJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q2s', raiseFrequency: 0.9, callFrequency: 0 },
  // Jスーテッド
  { handStr: 'JTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J4s', raiseFrequency: 0.7, callFrequency: 0 },
  // Tスーテッド
  { handStr: 'T9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T6s', raiseFrequency: 1.0, callFrequency: 0 },
  // 9スーテッド
  { handStr: '98s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '97s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '96s', raiseFrequency: 1.0, callFrequency: 0 },
  // 8スーテッド
  { handStr: '87s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '86s', raiseFrequency: 1.0, callFrequency: 0 },
  // 7スーテッド
  { handStr: '76s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '75s', raiseFrequency: 0.8, callFrequency: 0 },
  // 6スーテッド
  { handStr: '65s', raiseFrequency: 1.0, callFrequency: 0 },
  // 5スーテッド
  { handStr: '54s', raiseFrequency: 0.7, callFrequency: 0 },
  // オフスート
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A7o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A6o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A4o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A3o', raiseFrequency: 0.7, callFrequency: 0 },
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K8o', raiseFrequency: 0.7, callFrequency: 0 },
  { handStr: 'K7o', raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: 'QJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J8o', raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: 'T9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T8o', raiseFrequency: 0.7, callFrequency: 0 },
] as const;

export const SB_OPEN_RANGE: HandRange = [
  // ペア
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'TT',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '99',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '88',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '77',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '66',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '55',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '44',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '33',  raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '22',  raiseFrequency: 1.0, callFrequency: 0 },
  // Aスーテッド
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A2s', raiseFrequency: 1.0, callFrequency: 0 },
  // Kスーテッド
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K2s', raiseFrequency: 1.0, callFrequency: 0 },
  // Qスーテッド
  { handStr: 'QJs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q2s', raiseFrequency: 1.0, callFrequency: 0 },
  // Jスーテッド
  { handStr: 'JTs', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J4s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J3s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J2s', raiseFrequency: 0.2, callFrequency: 0 },
  // Tスーテッド
  { handStr: 'T9s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T8s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T7s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T6s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T5s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T4s', raiseFrequency: 0.2, callFrequency: 0 },
  // 9スーテッド
  { handStr: '98s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '97s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '96s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '95s', raiseFrequency: 1.0, callFrequency: 0 },
  // 8スーテッド
  { handStr: '87s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '86s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '85s', raiseFrequency: 1.0, callFrequency: 0 },
  // 7スーテッド
  { handStr: '76s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '75s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '74s', raiseFrequency: 1.0, callFrequency: 0 },
  // 6スーテッド
  { handStr: '65s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '64s', raiseFrequency: 1.0, callFrequency: 0 },
  // 5スーテッド
  { handStr: '54s', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '53s', raiseFrequency: 1.0, callFrequency: 0 },
  // オフスート
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'AJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'ATo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A8o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A7o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A6o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A5o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A4o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A3o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'A2o', raiseFrequency: 0.2, callFrequency: 0 },
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'KTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K8o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'K7o', raiseFrequency: 0.4, callFrequency: 0 },
  { handStr: 'QJo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'QTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'Q8o', raiseFrequency: 0.8, callFrequency: 0 },
  { handStr: 'JTo', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'J8o', raiseFrequency: 0.6, callFrequency: 0 },
  { handStr: 'T9o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: 'T8o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '98o', raiseFrequency: 1.0, callFrequency: 0 },
  { handStr: '87o', raiseFrequency: 0.2, callFrequency: 0 },
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



// ============================================================
// SRP（シングルレイズドポット）レンジ
// GTO Wizard より自動生成
//
//   raiseFrequency = 3bet 頻度
//   callFrequency  = cold call 頻度
//   fold = 1 - raise - call
// ============================================================

// UTG open に対する HJ の戦略レンジ (source: UTG_VS_HI.html)
export const HJ_VS_UTG_SRP_RANGE: HandRange = [
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'AQs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'AJs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'ATs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'A9s', raiseFrequency: 0.3, callFrequency: 0.0 }, // raise 30% / call 0% / fold 70%
  { handStr: 'A8s', raiseFrequency: 0.2, callFrequency: 0.0 }, // raise 20% / call 0% / fold 80%
  { handStr: 'A7s', raiseFrequency: 0.2, callFrequency: 0.0 }, // raise 20% / call 0% / fold 80%
  { handStr: 'A5s', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'A4s', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'A3s', raiseFrequency: 0.4, callFrequency: 0.0 }, // raise 40% / call 0% / fold 60%
  { handStr: 'AKo', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'KQs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'KJs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'KTs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'K9s', raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: 'K5s', raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: 'AQo', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'QQ',  raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'QJs', raiseFrequency: 0.2, callFrequency: 0.0 }, // raise 20% / call 0% / fold 80%
  { handStr: 'AJo', raiseFrequency: 0.2, callFrequency: 0.0 }, // raise 20% / call 0% / fold 80%
  { handStr: 'JJ',  raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'TT',  raiseFrequency: 0.7, callFrequency: 0.0 }, // raise 70% / call 0% / fold 30%
  { handStr: '99',  raiseFrequency: 0.3, callFrequency: 0.0 }, // raise 30% / call 0% / fold 70%
  { handStr: '88',  raiseFrequency: 0.3, callFrequency: 0.0 }, // raise 30% / call 0% / fold 70%
  { handStr: '77',  raiseFrequency: 0.3, callFrequency: 0.0 }, // raise 30% / call 0% / fold 70%
  { handStr: '66',  raiseFrequency: 0.2, callFrequency: 0.0 }, // raise 20% / call 0% / fold 80%
  { handStr: '65s', raiseFrequency: 0.2, callFrequency: 0.0 }, // raise 20% / call 0% / fold 80%
  { handStr: '55',  raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: '54s', raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: '44',  raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: '33',  raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: '22',  raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
] as const;

// UTG open に対する CO の戦略レンジ (source: UTG_VS_CO.html)
export const CO_VS_UTG_SRP_RANGE: HandRange = [
  { handStr: 'AA',  raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'AKs', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'AQs', raiseFrequency: 0.9, callFrequency: 0.1 }, // raise 90% / call 10% / fold 0%
  { handStr: 'AJs', raiseFrequency: 0.7, callFrequency: 0.3 }, // raise 70% / call 30% / fold 0%
  { handStr: 'ATs', raiseFrequency: 0.8, callFrequency: 0.2 }, // raise 80% / call 20% / fold 0%
  { handStr: 'A9s', raiseFrequency: 0.3, callFrequency: 0.0 }, // raise 30% / call 0% / fold 70%
  { handStr: 'A8s', raiseFrequency: 0.5, callFrequency: 0.0 }, // raise 50% / call 0% / fold 50%
  { handStr: 'A7s', raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: 'A5s', raiseFrequency: 0.9, callFrequency: 0.1 }, // raise 90% / call 10% / fold 0%
  { handStr: 'A4s', raiseFrequency: 0.9, callFrequency: 0.1 }, // raise 90% / call 10% / fold 0%
  { handStr: 'A3s', raiseFrequency: 0.7, callFrequency: 0.1 }, // raise 70% / call 10% / fold 20%
  { handStr: 'AKo', raiseFrequency: 0.9, callFrequency: 0.1 }, // raise 90% / call 10% / fold 0%
  { handStr: 'KK',  raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'KQs', raiseFrequency: 0.7, callFrequency: 0.3 }, // raise 70% / call 30% / fold 0%
  { handStr: 'KJs', raiseFrequency: 0.8, callFrequency: 0.2 }, // raise 80% / call 20% / fold 0%
  { handStr: 'KTs', raiseFrequency: 0.9, callFrequency: 0.1 }, // raise 90% / call 10% / fold 0%
  { handStr: 'K9s', raiseFrequency: 0.3, callFrequency: 0.0 }, // raise 30% / call 0% / fold 70%
  { handStr: 'K5s', raiseFrequency: 0.2, callFrequency: 0.0 }, // raise 20% / call 0% / fold 80%
  { handStr: 'AQo', raiseFrequency: 0.9, callFrequency: 0.1 }, // raise 90% / call 10% / fold 0%
  { handStr: 'KQo', raiseFrequency: 1.0, callFrequency: 0.0 }, // raise 100% / call 0% / fold 0%
  { handStr: 'QQ',  raiseFrequency: 0.9, callFrequency: 0.1 }, // raise 90% / call 10% / fold 0%
  { handStr: 'QJs', raiseFrequency: 0.6, callFrequency: 0.1 }, // raise 60% / call 10% / fold 30%
  { handStr: 'QTs', raiseFrequency: 0.1, callFrequency: 0.1 }, // raise 10% / call 10% / fold 80%
  { handStr: 'AJo', raiseFrequency: 0.5, callFrequency: 0.0 }, // raise 50% / call 0% / fold 50%
  { handStr: 'KJo', raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: 'JJ',  raiseFrequency: 0.8, callFrequency: 0.2 }, // raise 80% / call 20% / fold 0%
  { handStr: 'JTs', raiseFrequency: 0.0, callFrequency: 0.1 }, // raise 0% / call 10% / fold 90%
  { handStr: 'TT',  raiseFrequency: 0.7, callFrequency: 0.3 }, // raise 70% / call 30% / fold 0%
  { handStr: '99',  raiseFrequency: 0.4, callFrequency: 0.3 }, // raise 40% / call 30% / fold 30%
  { handStr: '98s', raiseFrequency: 0.0, callFrequency: 0.1 }, // raise 0% / call 10% / fold 90%
  { handStr: '88',  raiseFrequency: 0.3, callFrequency: 0.2 }, // raise 30% / call 20% / fold 50%
  { handStr: '77',  raiseFrequency: 0.3, callFrequency: 0.1 }, // raise 30% / call 10% / fold 60%
  { handStr: '66',  raiseFrequency: 0.2, callFrequency: 0.1 }, // raise 20% / call 10% / fold 70%
  { handStr: '65s', raiseFrequency: 0.2, callFrequency: 0.1 }, // raise 20% / call 10% / fold 70%
  { handStr: '55',  raiseFrequency: 0.1, callFrequency: 0.1 }, // raise 10% / call 10% / fold 80%
  { handStr: '54s', raiseFrequency: 0.1, callFrequency: 0.1 }, // raise 10% / call 10% / fold 80%
  { handStr: '44',  raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: '33',  raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
  { handStr: '22',  raiseFrequency: 0.1, callFrequency: 0.0 }, // raise 10% / call 0% / fold 90%
] as const;

// ============================================================
// SRPシナリオマップ
// ============================================================

export type SrpScenario = 'UTG_vs_CO';

export const SRP_RANGES: Record<SrpScenario, { openerRange: HandRange; callerRange: HandRange }> = {
  UTG_vs_CO: {
    openerRange: UTG_OPEN_RANGE,
    callerRange: CO_VS_UTG_SRP_RANGE,
  },
};
