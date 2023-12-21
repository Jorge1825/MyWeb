import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

//craer una tienda para setear y obtener el usuario mnteniendo la persistencia de datos
export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
      }),
      {
        name: "auth-storage",
        getStorage: () => createJSONStorage(),
      }
    )
  )
);
