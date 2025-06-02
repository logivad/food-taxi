import { useContext, type FC } from 'react';
import { Button } from '../ui-kit/button/button';
import { UserContext } from '../../contexts/user/user-context';

export const HeaderAuthButton: FC = () => {
  const { user, logIn, logOut } = useContext(UserContext);

  const auth = () => {
    logIn(prompt('Как вас зовут?') || undefined);
  };

  return user ? (
    <>
      <Button onClick={logOut}>Выйти</Button>
      <span className="ml-2">{user.name}</span>
    </>
  ) : (
    <Button onClick={auth}>Войти</Button>
  );
};
