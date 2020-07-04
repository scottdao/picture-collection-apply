import { combineReducers } from 'redux'
import {counter} from './counter';
import { fetchData } from './fetch'

export default combineReducers({
  counter,
  fetchData
})
