import { create } from "zustand";
import { fetcAdapter } from "@/utils";
import { Product } from "@/interfaces";
import { GetAllProductsResponse } from "@/interfaces/getAllProductsResponse";

interface ShopStore {
  products: Product[];
  loading: boolean;
  loadProducts: () => Promise<void>;
}

export const useShopStore = create<ShopStore>((set, get) => ({
  loading: false,
  products: [],
  loadProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetcAdapter.get<GetAllProductsResponse>("/shop");
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
}));
