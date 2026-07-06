"use client";

import { create } from "zustand";

type AppState = {
  entered: boolean;
  enter: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  entered: false,
  enter: () => set({ entered: true }),
}));