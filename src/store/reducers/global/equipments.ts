


import { handleActions } from 'redux-actions';
import { EQUIP_INFO } from '../../constants/global/equipments'

const initState = {};

const equipInfo = handleActions(
  {
    [EQUIP_INFO]: (state, { payload }) => {
      // console.log(state)
      return { ...state, equipInfo: payload};
    },
   
  },
  initState,
);
export { equipInfo };