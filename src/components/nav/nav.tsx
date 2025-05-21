import type { FC } from 'react';
import type { Restaurant } from '../../model/restaurant';

type Props = {
  restaurants: Array<Restaurant>;
  onRestaurantSelect: (restaurant: Restaurant) => void;
};

export const RestaurantsTabs: FC<Props> = ({
  restaurants,
  onRestaurantSelect,
}) => {
  return (
    <nav>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => onRestaurantSelect(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
    </nav>
  );
};
