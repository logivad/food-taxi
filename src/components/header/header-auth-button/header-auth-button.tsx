import { type FC } from 'react';
import { Button } from '../../ui-kit/button/button';
import { setUser, selectCurrentUser } from '../../../redux/entities/user/slice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import { clearCart } from '../../../redux/entities/cart/slice';
import { useNavigate } from 'react-router';

const baseUrl = import.meta.env.BASE_URL;

const getUser = () => ({
  id: 'userid',
  name: prompt('Как вас зовут?') || 'Аноним',
});

export const HeaderAuthButton: FC = () => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setUser(null));
    dispatch(clearCart());
    navigate(baseUrl);
  };

  return (
    <>
      {user && <span className="mr-2">{user.name}</span>}
      <Button onClick={user ? logout : () => dispatch(setUser(getUser()))}>
        {user ? 'Выйти' : 'Войти'}
      </Button>
    </>
  );
};
