import { useState } from 'react';

export const useDishCount = () => {
  const MAX_COUNT = 5;
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count < MAX_COUNT) {
      setCount(count + 1);
    }
  };

  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return [count, onIncrement, onDecrement] as const;
};
