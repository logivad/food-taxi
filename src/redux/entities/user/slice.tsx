import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../../../model/user.model';

const initialState: { user: User | null } = {
  user: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  selectors: {
    selectCurrentUser: (state) => state.user,
  },
  reducers: {},
});

export const { selectCurrentUser } = userSlice.selectors;

export const userReducer = userSlice.reducer;
