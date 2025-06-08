import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import type { RootState } from '../../redux/store';
import { NavLink } from 'react-router';

export const RestaurantTab: FC<{
  restaurantId: string;
}> = ({ restaurantId }) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId),
  );

  return (
    <NavLink
      to={restaurant.id}
      className={({ isActive }) =>
        isActive ? 'link-button active' : 'link-button'
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
