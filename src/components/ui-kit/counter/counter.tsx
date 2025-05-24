import { type FC } from 'react';

export interface Props {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export const Counter: FC<Props> = ({ value, onDecrement, onIncrement }) => {
  return (
    <span>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button> {value}
    </span>
  );
};
