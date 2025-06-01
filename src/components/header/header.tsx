import { useContext, type FC } from 'react';
import styles from './header.module.css';
import { Container } from '../ui-kit/container/container';
import { ThemeButton } from '../ui-kit/theme-button/theme-button';
import { UserContext } from '../../contexts';
import { Button } from '../ui-kit/button/button';
import classNames from 'classnames';

export const Header: FC = () => {
  const { user, setUser } = useContext(UserContext);

  const auth = () =>
    setUser({ id: 'mock-user-id', name: prompt('Как вас зовут?') || 'Аноним' });

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <span>Food taxi. Доставка для голодных животиков</span>
          <div className={classNames(styles.themeSwitch, 'mr-1')}>
            <ThemeButton />
          </div>

          {user ? (
            <>
              <Button onClick={() => setUser(null)}>Выйти</Button>
              <span className="ml-2">{user.name}</span>
            </>
          ) : (
            <Button onClick={auth}>Войти</Button>
          )}
        </div>
      </Container>
    </header>
  );
};
