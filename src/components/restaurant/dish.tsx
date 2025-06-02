import { useContext, useState, type FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';
import { UserContext } from '../../contexts/user/user-context';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 3;
const INITIAL_DISH_COUNT = 0;

export const Dish: FC<{ title: string }> = ({ title }) => {
  const [count, setCount] = useState(INITIAL_DISH_COUNT);
  const { user } = useContext(UserContext);

  return (
    <span>
      {title}{' '}
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
