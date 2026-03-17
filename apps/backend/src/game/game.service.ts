import { Injectable } from '@nestjs/common';
import type { Card, Hand, HandRange, HandStr } from '@taipa-poker/shared';

@Injectable()
export class GameService {
  /**
   * ハンド群（レンジ）からランダムに1ハンドを選んで返す
   * @param range 配布対象のハンド群
   * @param usedCards 既に使用済みのカード（重複を避けるため）
   */
  dealHandFromRange(range: HandRange, usedCards: Card[]): Hand {
    // TODO: 実装する
    throw new Error('Not implemented');
  }

  /**
   * ハンド表記（例: "AKs", "QQ", "T9o"）を Card 2枚に変換する
   * 使用済みカードと重複する場合は null を返す
   */
  private notationToHand(handStr: HandStr, usedCards: Card[]): Hand | null {
    // TODO: 実装する
    return null;
  }
}
