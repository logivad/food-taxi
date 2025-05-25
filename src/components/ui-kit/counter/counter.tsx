import { type FC } from 'react';

export type Props = {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

export const Counter: FC<Props> = ({ value, min, max, onChange }) => {
  return (
    <span>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
      >
        -
      </button>
      {value}
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
      >
        +
      </button>{' '}
    </span>
  );
};
