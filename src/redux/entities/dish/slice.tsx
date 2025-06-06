import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../../mocks/normalized-restaurants';
import type { Dish } from '../../../model/restaurant.model';

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce(
    (acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    },
    {} as Record<string, Dish>,
  ),
};

export const dishSlice = createSlice({
  name: 'dishSlice',
  initialState,
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectDishById, selectDishIds } = dishSlice.selectors;

export const dishReducer = dishSlice.reducer;
