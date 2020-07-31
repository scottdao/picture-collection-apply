import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
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
    return(
        <View className="page">
           单类图片详情集合
        </View>

    )
  }
}

export default Detail as ComponentClass<PageOwnProps, PageState>
