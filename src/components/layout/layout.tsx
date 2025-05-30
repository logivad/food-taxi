import { type FC, type PropsWithChildren } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import styles from './layout.module.css';
import { Progress } from '../ui-kit/progress/progress';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Progress />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
