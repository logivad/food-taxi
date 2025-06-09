import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/slice';
import type { RootState } from '../../redux/store';
import { selectCurrentUser } from '../../redux/entities/user/slice';
import { Link } from 'react-router';
import { CartDishCount } from '../cart-dish-count/cart-dish-count';

export const Dish: FC<{ id: string; nameAsLink?: boolean }> = ({
  id,
  nameAsLink,
}) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  return (
    <span>
      {nameAsLink ? (
        <Link to={'/dish/' + dish.id}>{dish.name}</Link>
      ) : (
        <span>{dish.name}</span>
      )}{' '}
      {user && <CartDishCount id={id} />}
    </span>
  );
};
