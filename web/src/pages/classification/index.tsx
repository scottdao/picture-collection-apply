import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtLoadMore, AtActivityIndicator } from 'taro-ui';
import _ from 'lodash';
import './index.scss';

import ClassifyContainer from '@/components/classifyContainer';

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
    navigationBarTitleText: '类别',
    onReachBottomDistance:50
  }
  state = {
    downLoading:false
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
  onScrollToLower(e) {
    console.log(e)
    this.setState({downLoading:true})
    setTimeout(() => {
      this.setState({downLoading:false})
    }, 2000);
  }
  onScroll(e){
   // console.log(e.detail)
  }
  render () {
    const equipInfo = this.props.equipInfo;
    const { downLoading } = this.state;
    const scrollTop = 0
    const Threshold = 20
    return(
      <ScrollView
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        style={`height:${_.get(equipInfo, 'windowHeight', 740)}px;background-color:#eee;`}
         onScrollToLower={this.onScrollToLower.bind(this)}
        onScroll={this.onScroll}
      >
        <View className="classify-list" id='classify-list'>
            <ClassifyContainer />
            <View style="position:relative;padding:20rpx;">
              <AtActivityIndicator size={32} content='加载中...' isOpened={downLoading} mode='center'/>
            </View>
        </View>
      </ScrollView>

    )
  }
}

export default Classification as ComponentClass<PageOwnProps, PageState>
