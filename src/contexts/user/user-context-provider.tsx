import { useState, type FC, type PropsWithChildren } from 'react';
import type { User } from '../../model/user.model';
import { UserContext } from './user-context';

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = (name = 'Аноним') => {
    setUser({
      id: 'test-id',
      name,
    });
  };

  const logOut = () => {
    setUser(null);
  };

  return <UserContext value={{ user, logIn, logOut }}>{children}</UserContext>;
};
