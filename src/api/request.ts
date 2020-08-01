import Taro from '@tarojs/taro';
import {BASE_URL} from './url';
import Taro from '@tarojs/taro'
// import { MessageInfo } from '@/components/common/InfoTips'
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
         Taro.showToast({
            title: `${error.msg}失败`,
            icon: 'none',
            duration: 2000
          })
    },
    success(data){
      successCb && successCb(data)
      return data;
    }
  });
};
