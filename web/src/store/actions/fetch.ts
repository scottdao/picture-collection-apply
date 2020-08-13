import { createActions } from 'redux-actions';
import {
  FetchStart,
  FetchSuccess,
  FetchFail
} from '../constants/fetch';
const { fetchStart, fetchFail, fetchSuccess } = createActions({
  [FetchStart]: payload => payload,
  [FetchFail]: payload => payload,
  [FetchSuccess]: payload => payload
});
// console.log(add)
export { fetchStart, fetchFail, fetchSuccess };