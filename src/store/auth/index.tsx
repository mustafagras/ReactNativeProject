import { create } from "zustand";
import type { TokenType } from "./utils";
import { getToken, removeToken, setToken } from "./utils";

interface AuthState {
  token: TokenType | null;
  status: "idle" | "signOut" | "signIn" | "guest";
  signIn: (data: TokenType) => void;
  signOut: () => void;
  setGuest: () => void;
  hydrate: () => void;
  updateToken: (data: TokenType) => void;
}

export const useAuth = create<AuthState>((set, get) => ({
  status: "idle",
  token: null,
  signIn: (token) => {
    setToken(token);
    set({ status: "signIn", token });
  },
  signOut: () => {
    removeToken();
    set({ status: "signOut", token: null });
  },
  setGuest: () => {
    removeToken();
    set({ status: "guest", token: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        get().signIn({ ...userToken, expires_in: userToken.expires_in });
      } else {
        get().signOut();
      }
    } catch (e) {
      console.log(e);
    }
  },
  updateToken: (token) => {
    try {
      if (token) {
        setToken(token);
        set({ token });
      } else {
        get().signOut();
      }
    } catch (e) {
      console.log(e);
    }
  },
}));

export const signOut = () => useAuth.getState().signOut();
export const setGuest = () => useAuth.getState().setGuest();
export const signIn = (token: TokenType) => useAuth.getState().signIn(token);
export const hydrateAuth = () => useAuth.getState().hydrate();
export const updateToken = (token: TokenType) =>
  useAuth.getState().updateToken(token);
