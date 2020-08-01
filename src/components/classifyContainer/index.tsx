import { ComponentClass } from 'react'
import Taro, { Component, Config, useState, useEffect, usePageScroll, useReachBottom  } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtAvatar   } from "taro-ui"
import _ from'lodash';
import { navigateTo } from '@/utils/tools'
import './index.scss';
type PageOwnProps = {}
type PageState = {}
const ClassifyContainer = ()=> {
   const [state, setstate] = useState(false);

   const url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg'
    const listData = _.chunk([0,1,2,3,4,5,6,7,8,9,8,8,0,3,4,4,4,5,5,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 3)
    return (
        <View className='classifyContainer' >
             {
                listData.map(items=> <View className='classifyContainer-row' key={items}>
                    {
                        items.map(item=> <View className='classifyContainer-col' key={item} onClick={()=>{
                          //  Taro.showToast({
                          //     title: '成功',
                          //     icon: 'success',
                          //     duration: 2000
                          //   })
                           navigateTo(`/pages/detail/detail?detailData=${item}`)
                          }}>
                            <View  style="height:250rpx;width:100%; background-color: pink;">
                                <image  style="width:100%;height:100%;border-radius:10rpx;" src={url}/>
                            </View>
                            <View style='height:55rpx;' className="classify-text">
                            刘道云看来世界的分厘卡撒酒疯两款手机发
                            </View>
                            <View style='height:55rpx' className='col-info'>
                            <image  style="width:60rpx;height:60rpx;border-radius:50%;" src={url} />
                            <View style="padding-left:10rpx;">
                                    <View style="color:#666">111</View><View style="color:#999">222</View>
                                </View>

                            </View>
                        </View>)
                    }
            </View>)
            }

        </View>
    )

}
export default ClassifyContainer as ComponentClass<PageOwnProps, PageState>;
