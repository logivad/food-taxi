import { createContext } from 'react';

export type ThemeVariants = 'light' | 'dark';

type ThemeContext = {
  theme: ThemeVariants | null;
  setTheme(value: ThemeVariants | null): void;
};

export const ThemeContext = createContext<ThemeContext>({
  theme: null,
  setTheme: (value: ThemeVariants | null) => {
    void value;
  },
});
