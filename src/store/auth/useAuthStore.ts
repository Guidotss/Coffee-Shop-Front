import { create } from "zustand";
import cookies from "js-cookie";
import { AuthResponse, User } from "@/app/auth/interfaces";
import { fetcAdapter } from "@/utils";

interface UseAuthStore {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  token: null,
  user: null,
  login: async (email: string, password: string) => {
    try {
      const response = await fetcAdapter.post<AuthResponse>("/auth/login", {
        email,
        password,
      });
      if (response.ok) {
        set({
          token: response.token,
          user: response.data,
        });
        cookies.set("token", response.token);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
}));
