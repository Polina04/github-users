import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'types/models';
import type { RootState } from 'redux/store';

type UsersState = {
  data: User[] | [];
  error: null | string;
  isLoading: boolean;
  isNextPageLoading: boolean;
  nextPageError: null | string;
};

const initialState: UsersState = {
  data: [],
  error: null,
  isLoading: false,
  isNextPageLoading: false,
  nextPageError: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: () => ({
      data: [],
      error: null,
      isLoading: true,
      isNextPageLoading: false,
      nextPageError: null,
    }),
    fetchUsersSuccess: (state, { payload }: PayloadAction<User[]>) => ({
      ...state,
      isLoading: false,
      data: [...state.data, ...payload],
      nextPageError: null,
    }),
    fetchUsersError: (state, { payload }: PayloadAction<null | string>) => ({
      ...state,
      isLoading: false,
      error: payload,
      isNextPageLoading: false,
    }),
    fetchNextPageUsers: state => ({
      ...state,
      isLoading: false,
      error: null,
      isNextPageLoading: true,
      nextPageError: null,
    }),
    fetchNextPageUsersError: (
      state,
      { payload }: PayloadAction<null | string>
    ) => ({
      ...state,
      isLoading: false,
      error: null,
      isNextPageLoading: true,
      nextPageError: payload,
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
