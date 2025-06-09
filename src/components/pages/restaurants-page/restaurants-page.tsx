import { type FC } from 'react';
import { RestaurantsTabs } from '../../restaurants-tabs/restaurants-tabs';
import { Outlet } from 'react-router';

export const RestaurantsPage: FC = () => {
  return (
    <>
      <RestaurantsTabs />
      <Outlet />
    </>
  );
};
