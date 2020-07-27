import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import { AtNavBar } from 'taro-ui'
// import VirtualList from '@tarojs/components/virtual-list'
import _ from 'lodash';
import './index.scss'

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

interface classification {
  props: IProps;
}

@connect(({ equipInfo }) => ({
  equipInfo:equipInfo.equipInfo
}), (dispatch) => ({
//   getEquipmentInfo(res){
//    dispatch(equipInfo(res))
//  }
}))
class Classification extends Component {
  config: Config = {
    navigationBarTitleText: '类别'
  }
  state = {
    /// data: buildData(0),
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
   
   }

  componentDidShow () { 
  }

  componentDidHide () { }
  onReachBottom(){
    console.log('下拉加载')
  }
  render () {
   //  console.log(this.props)
    const equipInfo = this.props.equipInfo

    // const dataLen = data.length
    return( 
      <scroll-view scroll-top="50" scroll-y={true} style={`height:${_.get(equipInfo, 'windowHeight', 740)}px;`}>
        <View className="classify-list">
              ggjghj
        </View>
      </scroll-view>
        
    )
  }
}

export default Classification as ComponentClass<PageOwnProps, PageState>
