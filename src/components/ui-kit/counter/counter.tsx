import { type FC } from 'react';
import styles from './counter.module.css';

export type Props = {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

export const Counter: FC<Props> = ({ value, min, max, onChange }) => {
  return (
    <span className={styles.counter}>
      <button
        className={styles.button}
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
      >
        -
      </button>
      {value}
      <button
        className={styles.button}
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
      >
        +
      </button>{' '}
    </span>
  );
};
