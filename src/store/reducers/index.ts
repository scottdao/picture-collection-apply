import { combineReducers } from 'redux'
import {counter} from './counter';
import { fetchData } from './fetch'
import { equipInfo } from './global/equipments'

export default combineReducers({
  counter,
  fetchData,
  equipInfo
})
