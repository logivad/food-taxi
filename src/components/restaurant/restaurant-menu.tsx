import type { FC } from 'react';
import { Link, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import type { RootState } from '../../redux/store';
import { DishName } from '../dish-name/dish-name';

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
            <Link to={'/dish/' + id}>
              <DishName dishId={id} />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
