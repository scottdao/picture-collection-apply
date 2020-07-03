import { call, put, takeEvery } from 'redux-saga/effects';

// import {
//   getAllTitleFailure,
//   getAllTitleSuccess,
// } from '../../actions/system-settings/all-title';
// import { GET_ALL_TITLE_START } from '../../types/system-settings/all-title';
import {ADD} from '../constants/counter'
function* getFetch(action) {
  // const {} = action.payload;
  try {
    // const res = yield call(Api.getAllTitle);
    // if (res) {
    //  //  yield put(getAllTitleSuccess(res.data));
    // }
  }catch (err) {
    // yield put(getAllTitleFailure(err));
  }
}

export default function* watchFetchSaga() {
  yield takeEvery(ADD, getFetch);
}