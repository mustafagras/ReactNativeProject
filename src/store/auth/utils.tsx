export type TokenType = {
  // Define the structure of your token here.
  // For example:
  accessToken: string;
  expires_in: number;
  // otherProperties: any;
};

const TOKEN_KEY = "your_app_token";

export const getToken = (): TokenType | null => {
  try {
    const tokenString = localStorage.getItem(TOKEN_KEY);
    if (tokenString) {
      const token = JSON.parse(tokenString) as TokenType;
      return token;
    }
    return null;
  } catch (e) {
    console.error("Error getting token:", e);
    return null;
  }
};

export const setToken = (token: TokenType): void => {
  try {
    const tokenString = JSON.stringify(token);
    localStorage.setItem(TOKEN_KEY, tokenString);
  } catch (e) {
    console.error("Error setting token:", e);
  }
};

export const removeToken = (): void => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    console.error("Error removing token:", e);
  }
};
