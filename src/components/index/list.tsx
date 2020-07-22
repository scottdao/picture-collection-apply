import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { AtDrawer } from 'taro-ui'
import './scss/list.scss';
class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
   
    return (
    <scroll-view scroll-top="50" scroll-y={true} style="height:764px;">
       <View className="list-all">
        <View className="list-banner">
            <View className="set-banner">
                <View className="set-banner-background">1</View>
                <View className="set-banner-tilte">名字</View>
            </View>
            <View className="set-banner"> 
                <View className="set-banner-background">1</View>
                <View className="set-banner-tilte">名字</View>
            </View>
            <View className="set-banner"> 
                <View className="set-banner-background">1</View>
                <View className="set-banner-tilte">名字</View>
            </View>
        </View>
        <View className='bus-zwc' >广告占位符</View>
        <View className="list-hot">
            <View className="hot-head">近期热门</View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
        </View>
        <View className="list-hot">
            <View className="hot-head">近期热门</View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
        </View>
        <View className="list-hot">
            <View className="hot-head">近期热门</View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">1</View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
        </View>
       </View>
    </scroll-view>
    )
  }
}
export default List as ComponentClass<PageOwnProps, PageState>
