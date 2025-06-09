import { type FC } from 'react';
import { RestaurantMenu } from './restaurant-menu';
import { RestaurantReviews } from './restaurant-reviews';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import type { RootState } from '../../redux/store';

export const RestaurantCard: FC<{ restaurantId: string }> = ({
  restaurantId,
}) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId),
  );

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <RestaurantMenu />
      <RestaurantReviews />
    </div>
  );
};
