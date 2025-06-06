import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../../../model/user.model';

const initialState: { user: User | null } = {
  user: {
    id: 'hklasdghjkf',
    name: 'Вадим',
  },
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  selectors: {
    selectCurrentUser: (state) => state.user,
  },
  reducers: {
    setUser(state, { payload }: { payload: User | null }) {
      state.user = payload;
    },
  },
});

export const { selectCurrentUser } = userSlice.selectors;
export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
