import Taro from '@tarojs/taro';
import {BASE_URL} from './url';
// import { Message } from '@/components/common/InfoTips'
export const requestApi = async (params, path, id) => {
  let url = '';
  if (id) {
    path = path.replace(/:id/, id);
  } else {
    path = path.replace(/:id/, '');
  }
  url = `${BASE_URL}${path}`;
  const {
    data,
    method,
    successCb,
    errorCb
  } = params || {};
  return await Taro.request({
    url,
    method: method || 'GET',
    data,
    fail(error){
        console.log(error)
        errorCb && errorCb(error)
        // Message('error', error.msg)
    },
    success(data){
      successCb && successCb(data)
      return data;
    }
  });
};
