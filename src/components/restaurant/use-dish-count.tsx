import { useState } from 'react';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 5;
const INITIAL_DISH_COUNT = 5;

export const useDishCount = () => {
  const [count, setCount] = useState(INITIAL_DISH_COUNT);

  const onIncrement = () => {
    if (count < MAX_DISH_COUNT) {
      setCount(count + 1);
    }
  };

  const onDecrement = () => {
    if (count > MIN_DISH_COUNT) {
      setCount(count - 1);
    }
  };

  return [count, onIncrement, onDecrement] as const;
};
