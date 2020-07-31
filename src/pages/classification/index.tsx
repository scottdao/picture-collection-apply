import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
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
  onReachBottom(){
    console.log('下拉加载')
  }
  moveMobileStart(e){
    if(!e || !e.touches){
      return false
    }
    const [touch] = e.changedTouches
   // console.log(touch,'start')
    this.sy = touch.clientY;
    this.sx = touch.clientX;
  }
  moveMobileEnd(e){
    if(!e || !e.touches){
      return false
    }
    const [touch] = e.changedTouches;
     let ey = touch.clientY;
     let ex = touch.clientX;
     if(this.sy-ey>0){
       let cha = this.sx-ex
       if(-50<= cha && cha<=50 ){
        // console.log('横着上拉')
         this.setState({downLoading:true})
         setTimeout(() => {
           this.setState({downLoading:false})
         }, 2000);
       }
     }else{
       this.setState({downLoading:false})
     }
  }
  render () {
    const equipInfo = this.props.equipInfo;
    const { downLoading } = this.state;
    return(
      <scroll-view scroll-y={true} style={`height:${_.get(equipInfo, 'windowHeight', 740)}px;background-color:#eee;`} >
        <View className="classify-list" id='classify-list' onTouchStart={this.moveMobileStart} onTouchEnd={this.moveMobileEnd} >
            <ClassifyContainer />
            <View style="position:relative;padding:20rpx;">
              <AtActivityIndicator size={32} content='加载中...' isOpened={downLoading} mode='center'/>
            </View>
        </View>

      </scroll-view>

    )
  }
}

export default Classification as ComponentClass<PageOwnProps, PageState>
