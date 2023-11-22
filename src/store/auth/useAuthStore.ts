import { create } from "zustand";
import cookies from "js-cookie";
import { AuthResponse, User } from "@/app/auth/interfaces";
import { fetchAdapter } from "@/utils";

interface AuthStore {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<[string, boolean]>;
  renewToken: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  user: null,
  login: async (email: string, password: string) => {
    try {
      const response = await fetchAdapter.post<AuthResponse>("/auth/login", {
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
      cookies.remove("token");
      return false;
    }
  },
  register: async (name: string, email: string, password: string) => {
    try {
      const response = await fetchAdapter.post<AuthResponse>("/auth/register", {
        name,
        email,
        password,
      });
      if (response.ok) {
        set({
          token: response.token,
          user: response.data,
        });
        cookies.set("token", response.token);
        return [response.message, true];
      }
      cookies.remove("token");
      return [response.message, false];
    } catch (error: any) {
      console.log(error);
      cookies.remove("token");
      return [error.message, false];
    }
  },
  renewToken: async () => {
    try {
      const token = cookies.get("token");
      if (!token) return;
      const response = await fetchAdapter.get<AuthResponse>(
        "/auth/renew",
        token
      );
      if (response.ok) {
        set({
          token: response.token,
          user: response.data,
        });
        cookies.set("token", response.token);
      } else {
        cookies.remove("token");
        set({ token: null, user: null });
      }
    } catch (error) {
      console.log(error);
      cookies.remove("token");
    }
  },
}));
