import { handleActions } from 'redux-actions';
import {
  FetchSuccess
} from '../constants/fetch';

const initState = {};

const fetchData = handleActions(
  {
    [FetchSuccess]: (state, { payload }) => {
      return { ...state, fetchData: payload};
    }
  },
  initState,
);
export { fetchData };