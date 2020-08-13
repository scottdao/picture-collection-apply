import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { AtDrawer } from 'taro-ui';
import _ from 'lodash';
import './scss/list.scss';
import { navigateTo } from '@/utils/tools'
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
    const equipInfo = this.props.equipInfo ||{};
    const currentWd = this.props.currentWd;
    // console.log(currentWd)
    const h = _.get(equipInfo, 'windowHeight', 0) - _.get(equipInfo, 'statusBarHeight', 0);
    return (
    <scroll-view scroll-top="50" scroll-y={true} style={`height:${h}px;`}>
       <View className="list-all">
        <View className="list-banner">
            <View className="set-banner" onClick={()=>{
               navigateTo("/pages/classification/index")
            }}>
                <View className="set-banner-background">
                    <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                </View>
                <View className="set-banner-tilte">名字</View>
            </View>
            <View className="set-banner"> 
                  <View className="set-banner-background">
                    <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                </View>
                <View className="set-banner-tilte">名字</View>
            </View>
            <View className="set-banner"> 
                  <View className="set-banner-background">
                    <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                </View>
                <View className="set-banner-tilte">名字</View>
            </View>
        </View>
        <View className='bus-zwc' >占位符</View>
        <View className="list-hot">
            <View className="hot-head">近期热门</View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">
                    <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">
                    <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">
                        <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
            <View className="list-banner">
                <View className="set-banner">
                    <View className="set-banner-background">
                        <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">
                        <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                   <View className="set-banner-background">
                        <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                
            </View>
        </View>
        <View className="list-hot">
            <View className="hot-head">近期热门</View>
            <View className="list-banner">
                <View className="set-banner">
                     <View className="set-banner-background">
                        <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">
                        <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
                    <View className="set-banner-tilte">名字</View>
                </View>
                <View className="set-banner"> 
                    <View className="set-banner-background">
                        <Image style="width:100%;height:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595524401746&di=f5fa7fc12a14565a3dfd0f63356ca8a6&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912d81c7b33c3fdfc0393452219.jpg" alt=""/>
                    </View>
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
