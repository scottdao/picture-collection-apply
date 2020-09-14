import { message } from 'antd';
interface IGlobal {
  namespace:String,
  state:{
    user: undefined | Object,

  },
  reducers:Object,
  effects:Object,
  subscriptions:Object
}
export default {
  namespace: 'global',
  state: {
    user: undefined,
  },

  reducers: {

  },

  effects: {

  },

  subscriptions: {

  },
} as IGlobal;
