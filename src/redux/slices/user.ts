import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import type { UserDetailed } from 'types/models';
import type { RootState } from 'redux/store';

type UsersState = {
  data: UserDetailed | null;
  error: null | string;
  isLoading: boolean;
};

const initialState: UsersState = {
  data: null,
  error: null,
  isLoading: false,
};

const fetchUserReducer: CaseReducer<
  UsersState,
  PayloadAction<string>
> = () => ({
  data: null,
  isLoading: true,
  error: null,
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: fetchUserReducer,
    fetchUserSuccess: (state, action: PayloadAction<UserDetailed>) => ({
      error: null,
      isLoading: false,
      data: action.payload,
    }),
    fetchUserError: (state, action: PayloadAction<null | string>) => ({
      data: null,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export const { fetchUser, fetchUserSuccess, fetchUserError } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
