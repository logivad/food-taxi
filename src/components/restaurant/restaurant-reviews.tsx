import type { FC } from 'react';
import type { Review } from '../../model/restaurant';

export const RestaurantReviews: FC<{ reviews: Array<Review> }> = ({
  reviews,
}) => {
  const reviewList = () => (
    <ul>
      {reviews.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );

  const noReviewsPlaceholder = () => <p>Отзывов пока нет</p>;

  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.length ? reviewList() : noReviewsPlaceholder()}
      <hr />
    </div>
  );
};
