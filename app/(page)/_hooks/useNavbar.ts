import { create } from "zustand";
interface useNavbarTypes {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useNavbar = create<useNavbarTypes>((set) => ({
  isOpen: false,
  open: () => {
    document.body.style.height = "100vh";
    set((state) => ({ isOpen: true }));
  },
  close: () => {
    document.body.style.height = "fit-content";
    set((state) => ({ isOpen: false }));
  },
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
