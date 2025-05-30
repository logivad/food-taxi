import { type FC } from 'react';

import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../pages/main-page/main-page';
import './app.css';

export const App: FC = () => {
  return (
    <Layout>
      <RestaurantsPage />
    </Layout>
  );
};
