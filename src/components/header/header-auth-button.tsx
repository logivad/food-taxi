import { type FC } from 'react';
import { Button } from '../ui-kit/button/button';
import { selectCurrentUser } from '../../redux/entities/user/slice';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

export const HeaderAuthButton: FC = () => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));

  return user ? (
    <>
      <Button>Выйти</Button>
      <span className="ml-2">{user.name}</span>
    </>
  ) : (
    <Button>Войти</Button>
  );
};
