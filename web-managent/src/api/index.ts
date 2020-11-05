import axios from 'axios'

import qs from 'qs'

const service = axios.create({
  baseURL: './',
  timeout: 10 * 1000
})

service.defaults.paramsSerializer = (params:any):any => {
  return qs.stringify(params, { arrayFormat: 'repeat' });
};

// 2.请求拦截器
service.interceptors.request.use((config: any) => {
//   const token = getToken();
//   if (token) {
//     config.headers.Auth = token; 
//   }
  return config
}, (error: any) => {
  return Promise.reject(error)
})

// 3.响应拦截器
service.interceptors.response.use((response :any) => {
  const data = response.data;
//   if (data.code !== 0) {
//     message.error(data.msg);
//   }
  return Promise.resolve(data)
}, (error: any) => {
//   /***** 接收到异常响应的处理开始 *****/
//   if (error && error.response) {
//     const statusMap = new Map([
//       [400, '错误请求'],
//       [401, '未授权，请重新登录'],
//       [403, '拒绝访问'],
//       [404, '请求错误,未找到该资源'],
//       [405, '请求方法未允许'],
//       [408, '请求超时'],
//       [500, '服务器端出错'],
//       [501, '网络未实现'],
//       [502, '网络错误'],
//       [503, '服务不可用'],
//       [504, '网络超时'],
//       [505, 'http版本不支持该请求']
//     ])
//     error.message = statusMap.get(error.response.status) || `连接错误${error.response.status}`;
//     message.error(error.message)
//   } else {
//     // 超时处理
//     if (JSON.stringify(error).includes('timeout')) {
//       message.error('服务器响应超时，请刷新当前页')
//     }else{
//       message.error('连接服务器失败')
//     }

//   }
  /***** 处理结束 *****/
  return Promise.reject(error.response)
})
service.prototype.handleFormatData = (params:any):any=>{
        const body = new FormData();
        Object.keys(params).forEach(item => {
            body.append(item, params[item]);
        });
        return body
};

export default service