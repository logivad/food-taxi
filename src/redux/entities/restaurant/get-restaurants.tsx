import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Restaurant } from '../../../model/restaurant.model';

export const getRestaurants = createAsyncThunk(
  'restaurants/getHeadphones',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const restaurants: Restaurant[] = await fetch(
      `http://localhost:3001/api/restaurants`,
    ).then((response) => response.json());

    if (!restaurants.length) {
      return rejectWithValue('No restaurants found');
    }

    return restaurants;
  },
);
