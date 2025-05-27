import type { FC } from 'react';
import type { Review } from '../../model/restaurant';
import { ReviewForm } from '../review-form/review-form';
import type { ReviewFormState } from '../review-form/use-form';

export const RestaurantReviews: FC<{ reviews: Array<Review> }> = ({
  reviews,
}) => {
  const showReview = (review: ReviewFormState) => console.log(review);

  return (
    <div>
      <p>Отзывы</p>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      ) : (
        <p>Отзывов пока нет</p>
      )}
      <ReviewForm onReviewCreate={showReview} />
    </div>
  );
};
