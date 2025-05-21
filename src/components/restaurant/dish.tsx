import type { FC } from 'react';
import { useDishCount } from './use-dish-count';

export const Dish: FC<{ title: string }> = ({ title }) => {
  const [count, incrementCount, decrementCount] = useDishCount();

  return (
    <span>
      {title} <button onClick={() => decrementCount()}>-</button> {count}{' '}
      <button onClick={() => incrementCount()}>+</button>
    </span>
  );
};
