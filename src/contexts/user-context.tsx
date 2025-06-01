import { useState, type FC, type PropsWithChildren } from 'react';
import type { User } from '../model/user.model';
import { UserContext } from '.';

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};
