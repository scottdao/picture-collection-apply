import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Swiper, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtNavBar } from 'taro-ui'
import './detail.scss'

type PageStateProps = {

}

type PageDispatchProps = {
//   add: () => void
//   dec: () => void
  // asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Detail {
  props: IProps;
}

// @connect(({  }) => ({

// }), (dispatch) => ({

// }))
class Detail extends Component {
    config: Config = {
    navigationBarTitleText: '详情页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {

   }

  componentDidShow () {
  }

  componentDidHide () { }

  render () {
    console.log(this.$router.params, '单类图片路由参数')
    const url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg'
    const imgList = [0,1,2,3,4,5,6];
    const scrollTop = 0
    const Threshold = 20
    return(
        <ScrollView
          className="page"
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          // style={`height:${_.get(equipInfo, 'windowHeight', 740)}px;background-color:#eee;`}
        >
            <Swiper
              className='swiper-contain'
              // indicatorColor='#999'
              // indicatorActiveColor='#333'
              // vertical
              // circular
              interval={4000}
              duration={300}
              // indicatorDots
              autoplay>
              {
                imgList.map(item=>  <SwiperItem key={item}>
                <View  style='height:100%; width:100%;'>
                   <Image
                      style='width:100%;height:100%;border-radius:10px;'
                      src={url}
                    />
                </View>
              </SwiperItem>)
              }
            </Swiper>
            <View style="margin:20px;">
              四个月前的表白图
            </View>
            <View className="detail-zwf">
              占位符
            </View>
        </ScrollView>

    )
  }
}

export default Detail as ComponentClass<PageOwnProps, PageState>
