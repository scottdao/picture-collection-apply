import { createActions } from 'redux-actions';
import {
  ADD,
  MINUS
} from '../constants/counter'


const { add, minus } = createActions({
  [ADD]: payload => payload,
  [MINUS]: payload => payload
});
// console.log(add)
export { add, minus };
// export const add = () => {
//   return {
//     type: ADD
//   }
// }
// export const minus = () => {
//   return {
//     type: MINUS
//   }
// }

// // 异步的action
// export function asyncAdd () {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(add())
//     }, 2000)
//   }
// }
