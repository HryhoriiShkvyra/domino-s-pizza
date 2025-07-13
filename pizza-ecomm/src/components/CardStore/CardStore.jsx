import { create } from "zustand";

export const useCardStore = create((set) => ({
  cardSize: "",
  setCardSize: (size) => set({ cardSize: size }),
  cardDough: "",
  setCardDough: (dough) => set({ cardDough: dough }),
}));

//  const setCardSize = (size) => useCardStore.setState({ cardSize: size });
export const getCardSize = () => useCardStore.getState().cardSize;
export const getCardDough = () => useCardStore.getState().cardDough;
