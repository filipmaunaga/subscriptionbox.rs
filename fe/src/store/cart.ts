import { create } from "zustand";
import { ISubscriptionBox } from "../misc/testData";
import { persist } from "zustand/middleware";

interface CartState {
  subscriptionBoxes: ISubscriptionBox[];
  addBox: (box: ISubscriptionBox) => void;
  removeBox: (boxId: string) => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      subscriptionBoxes: [],
      addBox: (box) =>
        set((state) => ({
          subscriptionBoxes: [...state.subscriptionBoxes, box],
        })),
      removeBox: (boxId) =>
        set((state) => ({
          subscriptionBoxes: state.subscriptionBoxes.filter(
            (box) => box.boxId !== boxId
          ),
        })),
    }),
    { name: "cart-storage" }
  )
);
