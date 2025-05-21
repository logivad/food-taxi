import { useState, type FC } from 'react';
import { MainNav } from '../nav/nav';
import { RestaurantCard } from '../restaurant/restaurant-card';

import restaurantsMock from '../../../mocks/restaurants';
import { Layout } from '../layout/layout';

export const App: FC = () => {
  const [restaurants] = useState(restaurantsMock);
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <Layout>
      <MainNav
        restaurants={restaurants}
        onRestaurantSelect={(restaurant) =>
          restaurant !== activeRestaurant && setActiveRestaurant(restaurant)
        }
      />
      <RestaurantCard restaurant={activeRestaurant} />
    </Layout>
  );
};
