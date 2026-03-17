import { create } from 'zustand';

import type { SrpDealResult, SrpScenario } from '@taipa-poker/shared';

interface SrpStore {
  scenario: SrpScenario;
  dealResult: SrpDealResult | null;
  error: string | null;
  setScenario: (scenario: SrpScenario) => void;
  setDealResult: (result: SrpDealResult) => void;
  setError: (message: string) => void;
  reset: () => void;
}

export const useSrpStore = create<SrpStore>((set) => ({
  scenario: 'UTG_vs_CO',
  dealResult: null,
  error: null,
  setScenario: (scenario) => set({ scenario, dealResult: null, error: null }),
  setDealResult: (dealResult) => set({ dealResult, error: null }),
  setError: (error) => set({ error }),
  reset: () => set({ dealResult: null, error: null }),
}));
