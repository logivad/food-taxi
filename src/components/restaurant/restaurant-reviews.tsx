import { useContext, type FC } from 'react';
import { ReviewForm } from '../review-form/review-form';
import type { ReviewFormState } from '../review-form/use-form';
import { UserContext } from '../../contexts/user/user-context';
import { RestaurantReview } from './restaurant-review';

export const RestaurantReviews: FC<{ reviewIds: Array<string> }> = ({
  reviewIds,
}) => {
  const showReview = (review: ReviewFormState) => console.log(review);
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>Отзывы</p>

      {reviewIds.length ? (
        <ul>
          {reviewIds.map((id) => (
            <li key={id}>
              <RestaurantReview id={id} />
            </li>
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
