import { useEffect, type FC } from 'react';
import styles from './restaurants-tabs.module.css';
import { Container } from '../ui-kit/container/container';
import { RestaurantTab } from './restaurant-tab';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRequestStatus,
  selectRestaurantIds,
} from '../../redux/entities/restaurant/slice';
import type { RootState } from '../../redux/store';
import { getRestaurants } from '../../redux/entities/restaurant/get-restaurants';
import { RequestStatus } from '../../constants';

export const RestaurantsTabs: FC = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector((state: RootState) =>
    selectRestaurantIds(state),
  );
  const requestStatus = useSelector((state: RootState) =>
    selectRequestStatus(state),
  );

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (requestStatus === RequestStatus.Idle || !restaurantIds.length) {
    return 'loading...';
  }

  if (requestStatus === RequestStatus.Error) {
    return 'error';
  }

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
