import { Injectable } from '@nestjs/common';
import type { Card } from '../../../../shared/src/constants/deck';
import { FULL_DECK } from '../../../../shared/src/constants/deck';
import { SrpScenario, SRP_RANGES } from '../../../../shared/src/constants/handRanges';
import type { SrpDealResult, DealResult } from '../../../../shared/src/types/socket';
import { dealHands } from './dealHands';
import type { Room } from './room.service';

// シナリオ → ポジション名のマッピング
const SCENARIO_POSITIONS: Record<SrpScenario, { originalRaiser: string; caller: string }> = {
  UTG_vs_CO: { originalRaiser: 'UTG', caller: 'CO' },
};

@Injectable()
export class GameService {
  /**
   * SRPシナリオに応じてオリジナルレイザーとコーラーのハンドをディールする。
   *
   * SRPにおけるcallerのアクション：
   *   - call: callFrequency > 0 のハンドが選ばれた場合 → そのまま返す
   *   - fold: callFrequency = 0 のハンドが選ばれた場合 → 再度ディールし直す
   *
   * つまり callFrequency を重みとして選択し、callするハンドが来るまでループする。
   */
  dealSrp(scenario: SrpScenario): SrpDealResult {
    const ranges = SRP_RANGES[scenario];
    const positions = SCENARIO_POSITIONS[scenario];

    // デッキをシャッフルしてコピー
    const deck = [...FULL_DECK].sort(() => Math.random() - 0.5);

    // オリジナルレイザーのハンドをディール（raiseFrequency を重みに使用）
    const originalRaiserCards = dealHands(ranges.openerRange, deck, 'raise');

    // コーラーは callFrequency を重みとして選択
    // callFrequency = 0 のハンドは fold なので再抽選（dealHands内でcallFrequency=0は重み0なので選ばれない）
    const callerCards = dealHands(ranges.callerRange, deck, 'call');

    return {
      scenario,
      originalRaiser: {
        position: positions.originalRaiser,
        hand: [this.cardToStr(originalRaiserCards[0]), this.cardToStr(originalRaiserCards[1])],
      },
      caller: {
        position: positions.caller,
        hand: [this.cardToStr(callerCards[0]), this.cardToStr(callerCards[1])],
        action: 'call',
      },
    };
  }

  /**
   * ルーム内のプレイヤーにハンドをディールする。
   * @returns 各プレイヤーへの DealResult の配列
   */
  dealHandsPlayersInTheSameRoom(room: Room): Array<{ socketId: string; result: DealResult }> {
    const ranges = SRP_RANGES[room.scenario];
    const positions = SCENARIO_POSITIONS[room.scenario];

    const deck = [...FULL_DECK].sort(() => Math.random() - 0.5);

    const openerCards = dealHands(ranges.openerRange, deck, 'raise');
    const callerCards = dealHands(ranges.callerRange, deck, 'call');

    return room.players.map((player) => {
      const isOpener = player.position === 'UTG';
      const cards = isOpener ? openerCards : callerCards;
      const positionLabel = isOpener ? positions.originalRaiser : positions.caller;

      return {
        socketId: player.socketId,
        result: {
          roomId: room.roomId,
          position: positionLabel,
          hand: [this.cardToStr(cards[0]), this.cardToStr(cards[1])] as [string, string],
        },
      };
    });
  }

  /**
   * カードオブジェクトを文字列表記に変換する
   * e.g. { cardnumber: 'A', suit: 'hearts' } → 'Ah'
   */
  private cardToStr(card: Card): string {
    const suitChar: Record<string, string> = {
      spades: 's',
      hearts: 'h',
      diamonds: 'd',
      clubs: 'c',
    };
    return `${card.cardnumber}${suitChar[card.suit]}`;
  }
}
