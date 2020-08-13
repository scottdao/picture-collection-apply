import { createActions } from 'redux-actions';
import {
  EQUIP_INFO
} from '../../constants/global/equipments'
// console.log(EQUIP_INFO)
const { equipInfo } = createActions({
  [EQUIP_INFO]: payload => payload
});
export { equipInfo };