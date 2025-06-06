import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../mocks/normalized-restaurants';
import type { Restaurant } from '../../../model/restaurant.model';

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce<Record<string, Restaurant>>(
    (acc, restaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    },
    {},
  ),
};

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectRestaurantById, selectRestaurantIds } =
  restaurantSlice.selectors;

export const restaurantReducer = restaurantSlice.reducer;
