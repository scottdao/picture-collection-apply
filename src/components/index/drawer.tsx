import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { AtDrawer } from 'taro-ui'
import './scss/drawer.scss';
class Drawer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       activeIndex:0
    }
  }
  
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    const {drawerShow, onClose, onTextClick} = this.props;
    const { activeIndex } = this.state;
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
        {label:"图片制作"},
        {label:"个人创建"},
        ]
    return (
        <AtDrawer 
            show={drawerShow} 
            mask 
            width = '100px'
            onClose={onClose} 
        >
          <View className="view-left-item">
            {
              items.map((item, index)=> <View 
              className={activeIndex===index?'drawer-item active-item':"drawer-item"} 
              key={item.label}
              onClick={()=>{
                this.setState({
                  activeIndex:index
                })
                onTextClick(item.label)
              }}
              >{item.label}</View>)
            }
          </View>
        </AtDrawer>
    )
  }
}
export default Drawer as ComponentClass<PageOwnProps, PageState>
