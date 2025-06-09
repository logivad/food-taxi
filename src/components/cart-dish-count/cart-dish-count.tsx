import { type FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from '../../redux/entities/cart/slice';
import type { RootState } from '../../redux/store';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 3;

export const CartDishCount: FC<{ id: string }> = ({ id }) => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) =>
    selectItemAmountById(state, id),
  );

  return (
    <Counter
      value={count}
      min={MIN_DISH_COUNT}
      max={MAX_DISH_COUNT}
      onIncrement={() => {
        dispatch(addToCart(id));
      }}
      onDecrement={() => dispatch(removeFromCart(id))}
    />
  );
};
