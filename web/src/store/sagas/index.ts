import { all, fork } from 'redux-saga/effects';
import FetchSaga from './fetch';

export default function* rootSaga() {
  yield all([
    fork(FetchSaga),
  ]);
}
