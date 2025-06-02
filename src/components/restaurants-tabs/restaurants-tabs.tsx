import type { FC } from 'react';
import type { Restaurant } from '../../model/restaurant.model';
import styles from './restaurants-tabs.module.css';
import { Container } from '../ui-kit/container/container';
import { Button } from '../ui-kit/button/button';

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
      <Container>
        {restaurants.map((restaurant) => (
          <span className={styles.tab} key={restaurant.id}>
            <Button
              key={restaurant.id}
              onClick={() => onRestaurantSelect(restaurant)}
            >
              {restaurant.name}
            </Button>
          </span>
        ))}
      </Container>
    </nav>
  );
};
