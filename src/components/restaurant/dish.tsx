import { useContext, useState, type FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';
import { UserContext } from '../../contexts/user/user-context';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/slice';
import type { RootState } from '../../redux/store';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 3;
const INITIAL_DISH_COUNT = 0;

export const Dish: FC<{ id: string }> = ({ id }) => {
  const [count, setCount] = useState(INITIAL_DISH_COUNT);
  const { user } = useContext(UserContext);

  const dish = useSelector((state: RootState) => selectDishById(state, id));

  return (
    <span>
      {dish.name}{' '}
      {user && (
        <Counter
          value={count}
          min={MIN_DISH_COUNT}
          max={MAX_DISH_COUNT}
          onChange={setCount}
        />
      )}
    </span>
  );
};
