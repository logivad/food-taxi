import { type FC } from 'react';

import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../pages/main-page/main-page';
import './app.scss';
import { ThemeContextProvider } from '../../contexts/theme/theme-context-provider';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
};
