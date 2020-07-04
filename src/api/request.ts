import Taro from '@tarojs/taro';
import {BASE_URL} from './url';
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
    method
  } = params || {};
  return await Taro.request({
    url,
    method: method || 'GET',
    data
  });
};