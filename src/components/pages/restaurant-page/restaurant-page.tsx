import { useEffect, useState, type FC } from 'react';
import { NavLink, Outlet, useParams } from 'react-router';
import { Container } from '../../ui-kit/container/container';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import { selectRestaurantById } from '../../../redux/entities/restaurant/slice';

export const RestaurantPage: FC = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId),
  );

  return (
    <Container>
      <h1>{restaurant?.name}</h1>

      <div>
        <span className="mr-1">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? 'link-button active' : 'link-button'
            }
          >
            Меню
          </NavLink>
        </span>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? 'link-button active' : 'link-button'
          }
        >
          Отзывы
        </NavLink>
      </div>
      <Outlet />
    </Container>
  );
};
