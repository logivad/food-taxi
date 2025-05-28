import type { FC } from 'react';
import type { Restaurant } from '../../model/restaurant';
import styles from './restaurants-tabs.module.css'

type Props = {
  restaurants: Array<Restaurant>;
  onRestaurantSelect: (restaurant: Restaurant) => void;
};

export const RestaurantsTabs: FC<Props> = ({
  restaurants,
  onRestaurantSelect,
}) => {
  return (
    <nav className={styles.tablist}>
      {restaurants.map((restaurant) => (
        <button
          className={styles.tab}
          key={restaurant.id}
          onClick={() => onRestaurantSelect(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
    </nav>
  );
};
