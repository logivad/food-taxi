import { useState, type FC } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MainNav } from '../nav/nav';
import { RestaurantCard } from '../restaurant/restaurant-card';

import restaurantsMock from '../../../mocks/restaurants';

export const App: FC = () => {
  const [restaurants] = useState(restaurantsMock);
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <>
      <Header />
      <MainNav
        restaurants={restaurants}
        onRestaurantSelect={(restaurant) =>
          restaurant !== activeRestaurant && setActiveRestaurant(restaurant)
        }
      />
      <RestaurantCard restaurant={activeRestaurant} />
      <Footer />
    </>
  );
};
