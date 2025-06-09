import { type FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';
import {
  MAX_RATING,
  MIN_RATING,
  useForm,
  type ReviewFormState,
} from './use-form';
import { Button } from '../ui-kit/button/button';

export type Props = {
  onReviewCreate: (review: ReviewFormState) => void;
};

export const ReviewForm: FC<Props> = ({ onReviewCreate }) => {
  const {
    form,
    onNameChange,
    onTextChange,
    onRatingDecrement,
    onRatingIncrement,
    onClear,
  } = useForm();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onReviewCreate(form);
      }}
    >
      <p>Оставить отзыв</p>

      <p>
        <input
          placeholder="имя"
          value={form.name}
          onChange={(event) => onNameChange(event.target.value)}
        />
      </p>

      <p>
        <textarea
          placeholder="отзыв"
          value={form.text}
          onChange={(event) => onTextChange(event.target.value)}
        />
      </p>

      <p>
        Оценка
        <Counter
          value={form.rating}
          min={MIN_RATING}
          max={MAX_RATING}
          onIncrement={onRatingIncrement}
          onDecrement={onRatingDecrement}
        />
      </p>

      <span className="mr-1">
        <Button onClick={onClear}>Очистить</Button>
      </span>
      <Button type="submit">Отправить</Button>
    </form>
  );
};
