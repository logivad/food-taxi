import { useState, type FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 3;
const INITIAL_DISH_COUNT = 0;

export const Dish: FC<{ title: string }> = ({ title }) => {
  const [count, setCount] = useState(INITIAL_DISH_COUNT);

  return (
    <span>
      {title}{' '}
      <Counter
        value={count}
        min={MIN_DISH_COUNT}
        max={MAX_DISH_COUNT}
        onChange={setCount}
      />
    </span>
  );
};
