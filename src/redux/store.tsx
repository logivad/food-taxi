import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit';
import {
  restaurantReducer,
  restaurantSlice,
} from './entities/restaurant/slice';
import { dishReducer, dishSlice } from './entities/dish/slice';
import { reviewReducer, reviewSlice } from './entities/review/slice';
import { userReducer, userSlice } from './entities/user/slice';
import { cartReducer, cartSlice } from './entities/cart/slice';

const options: ConfigureStoreOptions = {
  reducer: {
    [restaurantSlice.name]: restaurantReducer,
    [dishSlice.name]: dishReducer,
    [reviewSlice.name]: reviewReducer,
    [userSlice.name]: userReducer,
    [cartSlice.name]: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
};

export const store = configureStore(options);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
