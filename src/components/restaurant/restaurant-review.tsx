import { type FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectReviewById } from '../../redux/entities/review/slice';

export const RestaurantReview: FC<{ id: string }> = ({ id }) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));

  return <span>{review.text}</span>;
};
