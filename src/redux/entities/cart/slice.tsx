import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Количество единиц определенных товаров в корзине
// { 'item1-id': 5, 'item2-id': 1, ... }
const initialState: Record<string, number> = {};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
    clearCart: () => ({}),
  },
  selectors: {
    selectItemAmountById: (state, id: string) => {
      return state[id] || 0;
    },
    selectTotalCartItems: (state) =>
      Object.values(state).reduce((acc, curr) => acc + curr, 0),
  },
});

const selectCartSlice = (state: RootState) => state[cartSlice.name];

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => {
    return Object.keys(cartSlice).reduce<Array<{ id: string; amount: number }>>(
      (acc, id) => {
        acc.push({ id, amount: cartSlice[id] });

        return acc;
      },
      [],
    );
  },
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { selectItemAmountById, selectTotalCartItems } =
  cartSlice.selectors;
export const cartReducer = cartSlice.reducer;
