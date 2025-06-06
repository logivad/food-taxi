import { useState, type FC } from 'react';
import { ReviewForm } from '../review-form/review-form';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/entities/user/slice';
import type { RootState } from '../../redux/store';

export const RestaurantReviews: FC = () => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const [mockReviewSent, setMockReviewSent] = useState(false);

  return (
    <div>
      <p>Отзывы</p>

      {user && (
        <div>
          {mockReviewSent ? (
            <p>Спасибо за отзыв!</p>
          ) : (
            <ReviewForm onReviewCreate={() => setMockReviewSent(true)} />
          )}
        </div>
      )}
    </div>
  );
};
