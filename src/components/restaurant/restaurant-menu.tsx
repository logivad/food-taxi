import type { FC } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import type { RootState } from '../../redux/store';
import { Dish } from './dish';

export const RestaurantMenu: FC = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId),
  );

  return (
    <div>
      <h3>Меню</h3>
      <ol>
        {restaurant.menu.map((id) => (
          <li key={id}>
            <Dish id={id} nameAsLink />
          </li>
        ))}
      </ol>
    </div>
  );
};
