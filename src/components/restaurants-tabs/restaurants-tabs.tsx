import type { FC } from 'react';
import styles from './restaurants-tabs.module.css';
import { Container } from '../ui-kit/container/container';
import { RestaurantTab } from './restaurant-tab';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/slice';
import type { RootState } from '../../redux/store';

export const RestaurantsTabs: FC = () => {
  const restaurantIds = useSelector((state: RootState) =>
    selectRestaurantIds(state),
  );

  return (
    <nav className={styles.tablist}>
      <Container>
        {restaurantIds.map((restaurantId) => (
          <span className={styles.tab} key={restaurantId}>
            <RestaurantTab key={restaurantId} restaurantId={restaurantId} />
          </span>
        ))}
      </Container>
    </nav>
  );
};
