import { type FC } from 'react';

import { Layout } from '../layout/layout';
import './app.scss';
import { ThemeContextProvider } from '../../contexts/theme/theme-context-provider';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '../pages/home-page/home-page';
import { RestaurantMenu } from '../restaurant/restaurant-menu';
import { RestaurantReviews } from '../restaurant/restaurant-reviews';
import { RestaurantPage } from '../pages/restaurant-page/restaurant-page';
import { RestaurantsPage } from '../pages/restaurants-page/restaurants-page';
import { Cart } from '../pages/cart-page/cart-page';
import { DishPage } from '../pages/dish-page/dish-page';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/restaurants" element={<RestaurantsPage />}>
                <Route path=":restaurantId" element={<RestaurantPage />}>
                  <Route index element={<RestaurantMenu />} />
                  <Route path="reviews" element={<RestaurantReviews />} />
                </Route>
              </Route>

              <Route path="/dish/:dishId" element={<DishPage />} />

              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  );
};
