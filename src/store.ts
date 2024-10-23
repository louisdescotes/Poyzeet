import { create } from "zustand";

type OpenMenuState = {
 isOpen: boolean;
 toggleMenu: () => void;
};
export const useOpenMenu = create<OpenMenuState>((set) => ({
 isOpen: false,
 toggleMenu: () => set((state) => ({ isOpen: !state.isOpen})),
}))
