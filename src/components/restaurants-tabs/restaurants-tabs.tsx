import type { FC } from 'react';
import styles from './restaurants-tabs.module.css';
import { Container } from '../ui-kit/container/container';
import { RestaurantTab } from './restaurant-tab';

type Props = {
  restaurantIds: Array<string>;
  onRestaurantIdSelect: (restaurantId: string) => void;
};

export const RestaurantsTabs: FC<Props> = ({
  restaurantIds,
  onRestaurantIdSelect: onRestaurantSelect,
}) => {
  return (
    <nav className={styles.tablist}>
      <Container>
        {restaurantIds.map((restaurantId) => (
          <span className={styles.tab} key={restaurantId}>
            <RestaurantTab
              key={restaurantId}
              onClick={() => onRestaurantSelect(restaurantId)}
              restaurantId={restaurantId}
            />
          </span>
        ))}
      </Container>
    </nav>
  );
};
