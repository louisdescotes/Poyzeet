import { create } from 'zustand';

const Store = create((set) => ({
  menu: false,
  openMenu: () => set((state) => ({ menu: !state.menu }))
}));

export default Store;
