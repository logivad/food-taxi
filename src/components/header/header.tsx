import { type FC } from 'react';
import styles from './header.module.css';
import { Container } from '../ui-kit/container/container';
import { ThemeButton } from '../ui-kit/theme-button/theme-button';
import classNames from 'classnames';
import { HeaderAuthButton } from './header-auth-button/header-auth-button';
import { CartButton } from './cart-button/cart-button';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/entities/user/slice';
import type { RootState } from '../../redux/store';
import { Progress } from '../ui-kit/progress/progress';

export const Header: FC = () => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));

  return (
    <header className={styles.header}>
      <Progress />
      <Container>
        <div className={styles.content}>
          <span>Food taxi. Доставка для голодных животиков</span>
          <div className={classNames(styles.themeSwitch, 'mr-1')}>
            <ThemeButton />
          </div>

          {!!user && (
            <div className="mr-2">
              <CartButton />
            </div>
          )}

          <div className={styles.auth}>
            <HeaderAuthButton />
          </div>
        </div>
      </Container>
    </header>
  );
};
