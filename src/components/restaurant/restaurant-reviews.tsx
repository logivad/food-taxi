import { useContext, type FC } from 'react';
import type { Review } from '../../model/restaurant.model';
import { ReviewForm } from '../review-form/review-form';
import type { ReviewFormState } from '../review-form/use-form';
import { UserContext } from '../../contexts/user/user-context';

export const RestaurantReviews: FC<{ reviews: Array<Review> }> = ({
  reviews,
}) => {
  const showReview = (review: ReviewFormState) => console.log(review);
  const { user } = useContext(UserContext);

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
        <p>
          Отзывов пока нет
          {!user && <>. Войдите чтобы оставить отзыв</>}
        </p>
      )}

      {user && <ReviewForm onReviewCreate={showReview} />}
    </div>
  );
};
