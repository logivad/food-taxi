import { type FC } from 'react';
import styles from './header.module.css';
import { Container } from '../ui-kit/container/container';
import { ThemeButton } from '../theme-button/theme-button';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <span>Food taxi. Доставка для голодных животиков</span>
          <div className={styles.themeSwitch}>
            <ThemeButton />
          </div>
        </div>
      </Container>
    </header>
  );
};
