import { create } from "zustand";
import { fetchAdapter } from "@/utils";
import { Order, Product } from "@/interfaces";
import { GetAllProductsResponse } from "@/interfaces";
interface ShopStore {
  products: Product[];
  loading: boolean;
  cart: Order[];
  currentOrder: Order | null;
  loadProducts: () => Promise<void>;
  loadCart: () => void;
}

export const useShopStore = create<ShopStore>((set, get) => ({
  loading: false,
  products: [],
  cart: [],
  currentOrder: null,
  loadProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetchAdapter.get<GetAllProductsResponse>("/shop");
      if (response.ok) {
        set({ products: response.data, loading: false });
      } else {
        console.log(response.message);
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadCart: () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      set({ cart: JSON.parse(cart) });
    } else {
      set({ cart: [] });
    }
  },
}));
