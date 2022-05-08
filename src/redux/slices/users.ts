import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'types/models';
import type { RootState } from 'redux/store';

type UsersState = {
  data: User[] | [];
  error: null | string;
  isLoading: boolean;
  isNextPageLoading: boolean;
};

const initialState: UsersState = {
  data: [],
  error: null,
  isLoading: false,
  isNextPageLoading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: state => ({ ...state, isLoading: true }),
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => ({
      ...state,
      isLoading: false,
      data: [...state.data, ...action.payload],
    }),
    fetchUsersError: (state, action: PayloadAction<null | string>) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    fetchNextPageUsers: state => ({
      ...state,
      isNextPageLoading: true,
    }),
  },
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
  fetchNextPageUsers,
} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export const usersReducer = usersSlice.reducer;
