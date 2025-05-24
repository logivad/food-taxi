import type { FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';
import { useCounter } from '../ui-kit/counter/use-counter';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 3;
const INITIAL_DISH_COUNT = 0;

export const Dish: FC<{ title: string }> = ({ title }) => {
  const [count, incrementCount, decrementCount] = useCounter(
    INITIAL_DISH_COUNT,
    MIN_DISH_COUNT,
    MAX_DISH_COUNT,
  );

  return (
    <span>
      {title}{' '}
      <Counter
        value={count}
        onDecrement={decrementCount}
        onIncrement={incrementCount}
      />
    </span>
  );
};
