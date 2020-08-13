
import { requestApi }from './request'
export const getUserData = async(params)=> await requestApi(params, 'message/verifyCode')