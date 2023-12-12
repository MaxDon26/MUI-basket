import { create } from "zustand";
import fetchGoods from "../data/goods";

export const useGoods = create((set, get) => ({
  goods: [],
  basket: [],

  loadGoods: async () => {
    const goods = await fetchGoods();
    set((state) => (state.goods = goods));
  },
  addBasket: (id) => {
    console.log(get().basket);
    set((state) => ({ ...state, basket: [...state.basket, id] }));
  },
  getBasketItems: () => {
    return get().goods.filter((p) => get().basket.includes(p.id));
  },
  getQuantity: (id) => {
    return get().basket.filter((p) => p === id)?.length;
  },
  removeBasket: (id) => {
    set((state) => ({
      ...state,
      basket: state.basket.filter((p) => p !== id),
    }));
  },
}));

export const useSnake = create((set) => ({
  open: false,

  setOpen: (open) => set({ open }),
}));
