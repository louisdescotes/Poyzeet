import { create } from "zustand";

export const useOpenMenu = create((set) => ({
 isOpen: false,
 toggleMenu: () => set((state) => ({ isOpen: !state.isOpen})),
}))
