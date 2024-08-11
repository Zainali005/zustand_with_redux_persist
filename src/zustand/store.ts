// src/zustand/store.ts
import { create } from "zustand";
import { persistMiddleware } from "./middleware";

// Define your Zustand store with persistence
const useStore = create(
  persistMiddleware((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
);

export default useStore;
