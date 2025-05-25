import { type FC } from 'react';
import { Counter } from '../ui-kit/counter/counter';
import {
  MAX_RATING,
  MIN_RATING,
  useForm,
  type ReviewFormState,
} from './use-form';

export type Props = {
  onReviewCreate: (review: ReviewFormState) => void;
};

export const ReviewForm: FC<Props> = ({ onReviewCreate }) => {
  const { form, onNameChange, onTextChange, onRatingChange, onClear } =
    useForm();

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
          onChange={onRatingChange}
        />
      </p>

      <button type="button" onClick={onClear}>
        Очистить
      </button>

      <button type="submit">Отправить</button>
    </form>
  );
};
