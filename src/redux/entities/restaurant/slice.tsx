import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';
import { RequestStatus } from '../../../constants';
import type { RootState } from '../../store';
import { type Restaurant } from '../../../model/restaurant.model';

const entityAdapter = createEntityAdapter<Restaurant>();

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState: entityAdapter.getInitialState({
    requestStatus: RequestStatus.Idle,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = RequestStatus.Pending;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = RequestStatus.Error;
      }),
});

export const { selectRequestStatus } = restaurantSlice.selectors;

const selectSlice = (state: RootState) => state[restaurantSlice.name];

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectSlice);

export const restaurantReducer = restaurantSlice.reducer;
