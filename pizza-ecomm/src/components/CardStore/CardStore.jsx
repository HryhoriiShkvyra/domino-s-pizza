import { create } from "zustand";

export const useCardStore = create((set) => ({
  cardSize: "standard",
  setCardSize: (size) => set({ cardSize: size }),
}));

export const setCardSize = (size) => useCardStore.setState({ cardSize: size });
export const getCardSize = () => useCardStore.getState().cardSize;
