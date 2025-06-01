import { type FC } from 'react';

import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../pages/main-page/main-page';
import './app.scss';
import { ThemeContextProvider } from '../../contexts/theme-context';

export const App: FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </ThemeContextProvider>
  );
};
