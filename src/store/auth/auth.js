import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

//craer una tienda para setear y obtener el usuario mnteniendo la persistencia de datos
export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuth: false,
        setUser: (user) => set({ user }),
        setToken: (token) => set({ token, isAuth: true }),
        logout: () => set({ user: null, token: null, isAuth: false }),
      }),
      {
        name: "auth",
      }
    )
  )
);
