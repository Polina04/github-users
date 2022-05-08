import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { usersReducer } from 'redux/slices/users';
import { userReducer } from 'redux/slices/user';

import saga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
