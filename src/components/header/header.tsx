import { type FC } from 'react';
import styles from './header.module.css';
import { Container } from '../ui-kit/container/container';
import { ThemeButton } from '../ui-kit/theme-button/theme-button';
import classNames from 'classnames';
import { HeaderAuthButton } from './header-auth-button';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <span>Food taxi. Доставка для голодных животиков</span>
          <div className={classNames(styles.themeSwitch, 'mr-1')}>
            <ThemeButton />
          </div>

          <HeaderAuthButton />
        </div>
      </Container>
    </header>
  );
};
