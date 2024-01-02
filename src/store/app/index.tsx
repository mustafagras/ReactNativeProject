import { create } from "zustand";
import { StoreType } from "../../types";

interface AppSettings {
  isLoading: boolean;
  toggleLoader: () => void;
  hideLoader: () => void;
  setLoader: (isLoading: boolean) => void;
}

export const useAppSettings = create<AppSettings>((set, get) => ({
  isLoading: false,
  toggleLoader: () => {
    set({ isLoading: true });
  },
  hideLoader: () => {
    set({ isLoading: false });
  },
  setLoader: (isLoading: boolean) => {
    set({ isLoading });
  },
}));

export const useAppStore = create<StoreType>((set, get) => ({
  isLogin: false,
  setIsLogin: (params) => {
    set({ isLogin: params });
  },
}));
