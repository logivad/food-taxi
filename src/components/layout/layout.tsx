import { type FC, type PropsWithChildren } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Container } from '../ui-kit/container/container';
import styles from './layout.module.css'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
        <Container>
          {children}
        </Container>
      <Footer />
    </div>
  );
};
