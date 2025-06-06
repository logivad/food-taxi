import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../../mocks/normalized-restaurants';
import type { Review } from '../../../model/restaurant.model';

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce(
    (acc, review) => {
      acc[review.id] = review;
      return acc;
    },
    {} as Record<string, Review>,
  ),
};

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  selectors: {
    selectReviewIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectReviewById, selectReviewIds } = reviewSlice.selectors;

export const reviewReducer = reviewSlice.reducer;
