import { create } from "zustand";
import { ISubscriptionBox } from "../misc/testData";

interface CartState {
  subscriptionBoxes: ISubscriptionBox[];
  addBox: (box: ISubscriptionBox) => void;
  // removeBox: (box: ISubscriptionBox) => void;
}

export const useCart = create<CartState>()((set) => ({
  subscriptionBoxes: [],
  addBox: (box) =>
    set((state) => ({ subscriptionBoxes: [...state.subscriptionBoxes, box] })),
  // removeBox: (box) =>
  //   set((state) => ({ subscriptionBoxes: state.subscriptionBoxes })),
}));
