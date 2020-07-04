import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { AtDrawer } from 'taro-ui'
class Drawer extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    const {drawerShow, onClose} = this.props;
    const items = [
        {label:"性感"},
        {label:"健身"},
        {label:"风景"},
        {label:"原创"},
        {label:"影视"},
        {label:"二次元"},
        {label:"文字"},
        {label:"gif动图"},
        {label:"绘画"},
        {label:"婚礼"},
        {label:"个人"},
        {label:"图片制作"}
        ]
    return (
        <AtDrawer 
            show={drawerShow} 
            mask 
            width = '80px'
            onClose={onClose} 
        >
            <View className='drawer-item'>优先展示items里的数据</View>
            <View className='drawer-item'>如果items没有数据就会展示children</View>
            <View className='drawer-item'>这是自定义内容 <AtIcon value='home' size='20' /></View>
            <View className='drawer-item'>这是自定义内容</View>
        </AtDrawer>
    )
  }
}
export default Drawer as ComponentClass<PageOwnProps, PageState>
