import type { FC } from 'react';
import type { Review } from '../../model/restaurant';

export const RestaurantReviews: FC<{ reviews: Array<Review> }> = ({
  reviews,
}) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
