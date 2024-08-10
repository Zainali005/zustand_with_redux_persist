import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

export const persistMiddleware = (config) => {
  return persist(config, {
    storage: createJSONStorage(() => localStorage),
    name: "",
  });
};
