import { create } from 'zustand';
import type { SrpDealResult, SrpScenario, DealResult } from '@taipa-poker/shared';

// ルームの画面フェーズ
export type RoomPhase =
  | 'lobby'    // 初期画面（作成/参加選択）
  | 'waiting'  // 作成者が相手を待っている
  | 'ready'    // 2人揃った、ディール可能
  | 'dealt';   // ハンド表示中（再ディール可能）

interface SrpStore {
  // シングルプレイ（旧）
  scenario: SrpScenario;
  dealResult: SrpDealResult | null;
  error: string | null;
  setScenario: (scenario: SrpScenario) => void;
  setDealResult: (result: SrpDealResult) => void;
  setError: (message: string) => void;
  reset: () => void;

  // ルーム
  roomPhase: RoomPhase;
  roomId: string | null;
  myPosition: string | null;  // 'UTG' or 'CO'
  myHand: [string, string] | null;
  roomError: string | null;
  setRoomPhase: (phase: RoomPhase) => void;
  setRoomCreated: (roomId: string, position: 'UTG') => void;
  setRoomJoined: (position: 'CO') => void;
  setRoomReady: (roomId: string) => void;
  setRoomDealt: (result: DealResult) => void;
  setRoomError: (message: string) => void;
  resetRoom: () => void;
}

export const useSrpStore = create<SrpStore>((set) => ({
  // シングルプレイ（旧）
  scenario: 'UTG_vs_CO',
  dealResult: null,
  error: null,
  setScenario: (scenario) => set({ scenario, dealResult: null, error: null }),
  setDealResult: (dealResult) => set({ dealResult, error: null }),
  setError: (error) => set({ error }),
  reset: () => set({ dealResult: null, error: null }),

  // ルーム
  roomPhase: 'lobby',
  roomId: null,
  myPosition: null,
  myHand: null,
  roomError: null,
  setRoomPhase: (roomPhase) => set({ roomPhase }),
  setRoomCreated: (roomId, position) =>
    set({ roomId, myPosition: position, roomPhase: 'waiting', roomError: null }),
  setRoomJoined: (position) =>
    set({ myPosition: position, roomError: null }),
  setRoomReady: (roomId) =>
    set({ roomId, roomPhase: 'ready', roomError: null }),
  setRoomDealt: (result) =>
    set({ myHand: result.hand, myPosition: result.position, roomPhase: 'dealt', roomError: null }),
  setRoomError: (roomError) => set({ roomError }),
  resetRoom: () =>
    set({ roomPhase: 'lobby', roomId: null, myPosition: null, myHand: null, roomError: null }),
}));
