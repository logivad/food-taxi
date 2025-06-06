import { configureStore } from '@reduxjs/toolkit';
import {
  restaurantReducer,
  restaurantSlice,
} from './entities/restaurant/slice';
import { dishReducer, dishSlice } from './entities/dish/slice';
import { reviewReducer, reviewSlice } from './entities/review/slice';
import { userReducer, userSlice } from './entities/user/slice';
import { cartReducer, cartSlice } from './entities/cart/slice';

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantReducer,
    [dishSlice.name]: dishReducer,
    [reviewSlice.name]: reviewReducer,
    [userSlice.name]: userReducer,
    [cartSlice.name]: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
