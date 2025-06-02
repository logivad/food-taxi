import { createContext } from 'react';
import type { User } from '../../model/user.model';

type UserContext = {
  user: User | null;
  logIn(username?: string): void;
  logOut(): void;
};

export const UserContext = createContext<UserContext>({
  user: null,
  logIn(username?: string) {
    void username;
  },
  logOut() {},
});
