import { createContext } from 'react';
import type { User } from '../model/user.model';

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

type UserContext = {
  user: User | null;
  setUser(value: User | null): void;
};

export const UserContext = createContext<UserContext>({
  user: null,
  setUser: (value: User | null) => {
    void value;
  },
});
