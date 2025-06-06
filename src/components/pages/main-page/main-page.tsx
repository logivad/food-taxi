import { useState, type FC } from 'react';

import { RestaurantsTabs } from '../../restaurants-tabs/restaurants-tabs';
import { selectRestaurantIds } from '../../../redux/entities/restaurant/slice';
import { useSelector } from 'react-redux';
import { Container } from '../../ui-kit/container/container';
import { RestaurantCard } from '../../restaurant/restaurant-card';

export const RestaurantsPage: FC = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0],
  );

  return (
    <div>
      <RestaurantsTabs
        restaurantIds={restaurantIds}
        onRestaurantIdSelect={(restaurantId) =>
          restaurantId !== activeRestaurantId &&
          setActiveRestaurantId(restaurantId)
        }
      />

      <Container>
        <RestaurantCard
          restaurantId={activeRestaurantId}
          key={activeRestaurantId}
        />
      </Container>
    </div>
  );
};
