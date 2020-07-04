import Taro from '@tarojs/taro';

export const navigateTo = (url, success, events) =>{
    return Taro.navigateTo({
            url,
            events,
            success
    })
}
