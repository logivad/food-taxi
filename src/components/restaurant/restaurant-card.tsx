import { type FC } from 'react';
import type { Restaurant } from '../../model/restaurant';
import { RestaurantMenu } from './restaurant-menu';
import { RestaurantReviews } from './restaurant-reviews';

export const RestaurantCard: FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <RestaurantMenu menu={restaurant.menu} />
      <RestaurantReviews reviews={restaurant.reviews} />
    </div>
  );
};
