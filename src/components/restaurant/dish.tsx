import { type FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/slice';
import type { RootState } from '../../redux/store';
import { selectCurrentUser } from '../../redux/entities/user/slice';
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from '../../redux/entities/cart/slice';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 3;

export const Dish: FC<{ id: string }> = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  const count = useSelector((state: RootState) =>
    selectItemAmountById(state, id),
  );

  return (
    <span>
      {dish.name}{' '}
      {user && (
        <Counter
          value={count}
          min={MIN_DISH_COUNT}
          max={MAX_DISH_COUNT}
          onIncrement={() => {
            dispatch(addToCart(id));
          }}
          onDecrement={() => dispatch(removeFromCart(id))}
        />
      )}
    </span>
  );
};
