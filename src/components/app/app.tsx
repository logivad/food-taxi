import { type FC } from 'react';

import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../pages/main-page/main-page';
import './app.scss';
import { ThemeContextProvider } from '../../contexts/theme-context';
import { UserContextProvider } from '../../contexts/user-context';

export const App: FC = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
