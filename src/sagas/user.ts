import { takeLatest, put, call } from 'redux-saga/effects';

import type { UserDetailed } from 'types/models';

import { getUserByLogin } from 'services/api';

import { fetchUser, fetchUserSuccess, fetchUserError } from 'redux/slices/user';

export function* fetchUserByLoginWorker({ payload }: { payload: string }) {
  try {
    const userData: UserDetailed = yield call(getUserByLogin, payload);
    yield put(fetchUserSuccess(userData));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUserError(error.message));
      return;
    }
  }
}

export function* fetchUserSaga() {
  yield takeLatest(fetchUser, fetchUserByLoginWorker);
}

export default fetchUserSaga;
