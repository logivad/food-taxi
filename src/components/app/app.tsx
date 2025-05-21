import { type FC } from 'react';

import { Layout } from '../layout/layout';
import { MainPage } from '../pages/main-page/main-page';

export const App: FC = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};
