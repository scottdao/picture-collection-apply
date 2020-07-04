import { call, put, takeEvery } from 'redux-saga/effects';
import {getUserData} from '../../api';
import {
  fetchFail, fetchSuccess 
} from '../actions/fetch';
import {
  FetchStart
} from '../constants/fetch';

function* getFetch(action) {
  try {
    const res = yield call(getUserData);
    // console.log(res, 123)
    if (res) {
      yield put(fetchSuccess(res.data));
    }
  }catch (err) {
    yield put(fetchFail(err));
  }
}

export default function* watchFetchSaga() {
  yield takeEvery(FetchStart, getFetch);
}