import { type FC } from 'react';
import styles from './counter.module.css';

export type Props = {
  value: number;
  min: number;
  max: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Counter: FC<Props> = ({
  value,
  min,
  max,
  onIncrement,
  onDecrement,
}) => {
  return (
    <span className={styles.counter}>
      <button
        className={styles.button}
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
      >
        -
      </button>
      {value}
      <button
        className={styles.button}
        type="button"
        onClick={onIncrement}
        disabled={value >= max}
      >
        +
      </button>{' '}
    </span>
  );
};
