import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0
}


import { handleActions } from 'redux-actions';


const initState = {};

const counter = handleActions(
  {
    [ADD]: (state, { payload }) => {
      // console.log(state)
      return { ...state, num: state.num+1};
    },
    [MINUS]:(state, {payload})=>{
      return {...state, num:state.num - 1}
    }  
  },
  INITIAL_STATE,
);
export { counter };

// export default function counter (state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case ADD:
//       return {
//         ...state,
//         num: state.num + 1
//       }
//      case MINUS:
//        return {
//          ...state,
//          num: state.num - 1
//        }
//      default:
//        return state
//   }
// }
