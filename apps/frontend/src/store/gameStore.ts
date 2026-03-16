import { create } from 'zustand';
import { GameState } from '@taipa-poker/shared';

interface GameStore {
  gameState: GameState | null;
  roomId: string | null;
  playerName: string | null;
  setGameState: (state: GameState) => void;
  setRoomId: (roomId: string) => void;
  setPlayerName: (name: string) => void;
  reset: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: null,
  roomId: null,
  playerName: null,
  setGameState: (gameState) => set({ gameState }),
  setRoomId: (roomId) => set({ roomId }),
  setPlayerName: (playerName) => set({ playerName }),
  reset: () => set({ gameState: null, roomId: null, playerName: null }),
}));
