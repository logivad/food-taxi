import type { FC, PropsWithChildren } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
