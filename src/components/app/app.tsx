import { type FC } from 'react';

import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../pages/main-page/main-page';
import './app.scss';
import { ThemeContextProvider } from '../../contexts/theme/theme-context-provider';
import { UserContextProvider } from '../../contexts/user/user-context-provider';

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
