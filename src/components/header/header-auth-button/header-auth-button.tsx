import { type FC } from 'react';
import { Button } from '../../ui-kit/button/button';
import { setUser, selectCurrentUser } from '../../../redux/entities/user/slice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import type { User } from '../../../model/user.model';
import { clearCart } from '../../../redux/entities/cart/slice';

export const HeaderAuthButton: FC = () => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const dispatch = useDispatch();
  const mockUser: User = { id: 'one', name: 'Аноним' };

  const logout = () => {
    dispatch(setUser(null));
    dispatch(clearCart());
  };

  return user ? (
    <>
      <span className="mr-2">{user.name}</span>
      <Button onClick={logout}>Выйти</Button>
    </>
  ) : (
    <Button onClick={() => dispatch(setUser(mockUser))}>Войти</Button>
  );
};
