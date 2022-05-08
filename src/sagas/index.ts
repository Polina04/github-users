import { all } from 'redux-saga/effects';

import usersSaga from 'sagas/users';
import userSaga from 'sagas/user';

const rootSaga = function* root() {
  yield all([usersSaga(), userSaga()]);
};

export default rootSaga;
