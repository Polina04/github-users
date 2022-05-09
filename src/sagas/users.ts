import { takeLatest, put, call, select } from 'redux-saga/effects';

import type { User } from 'types/models';

import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
  fetchNextPageUsers,
} from 'redux/slices/users';

import { getUsers } from 'services/api';

export function* fetchUsersWorker() {
  try {
    const usersList: User[] = yield call(getUsers);
    yield put(fetchUsersSuccess(usersList));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersError(error.message));
    }
  }
}

export function* fetchNextPageUsersWorker() {
  try {
    const users: User[] = yield select(state => state.users.data);
    const lastUser = users[users.length - 1];
    if (lastUser.id) {
      const usersList: User[] = yield call(getUsers, lastUser.id);
      yield put(fetchUsersSuccess(usersList));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersError(error.message));
    }
  }
}

export function* fetchUsersWatcher() {
  yield takeLatest(fetchUsers, fetchUsersWorker);
  yield takeLatest(fetchNextPageUsers, fetchNextPageUsersWorker);
}

export default fetchUsersWatcher;
