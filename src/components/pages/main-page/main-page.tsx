import { useState, type FC } from 'react';

import { RestaurantsTabs } from '../../nav/nav';
import { RestaurantCard } from '../../restaurant/restaurant-card';
import restaurantsMock from '../../../../mocks/restaurants';

export const MainPage: FC = () => {
  const [restaurants] = useState(restaurantsMock);
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <div>
      <RestaurantsTabs
        restaurants={restaurants}
        onRestaurantSelect={(restaurant) =>
          restaurant !== activeRestaurant && setActiveRestaurant(restaurant)
        }
      />
      <RestaurantCard restaurant={activeRestaurant} />
    </div>
  );
};
