import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtNavBar, AtDrawer, AtToast } from 'taro-ui'
import { add, minus } from '@/store/actions/counter'
import { fetchStart } from '@/store/actions/fetch'
import { equipInfo }  from '@/store/actions/global/equipments'
import { navigateTo } from '@/utils/tools'
import './index.scss';
import Drawer from '@/components/index/drawer';
import List from '@/components/index/list';
// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  // asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ counter, fetchData, equipInfo }) => ({
  counter,
  fetchData:fetchData.fetchData,
  equipInfo:equipInfo.equipInfo
}), (dispatch) => ({
  add () {
    // console.log(dispatch,add)
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  fetchStart(){
    dispatch(fetchStart())
  }
 getEquipmentInfo(res){
   dispatch(equipInfo(res))
 }
}))
class Index extends Component {
    config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor(props) {
    super(props)
    this.state = {
       drawerShow:false,
       currentWd:'性感'
    }
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () {

   }

  componentDidShow () {
     wx.getSystemInfo({
      success:  (res) =>{
        this.props.getEquipmentInfo(res)
        let height = res.windowHeight - res.statusBarHeight
      }
    });
    // this.props.fetchStart();
  }

  componentDidHide () { }

  render () {
    const { currentWd } = this.state;
    const { equipInfo }= this.props;
    return (
      <View className="page page-index">
        <AtNavBar
          onClickLeftIcon={()=>{
            this.setState({
              drawerShow:true
            })
          }}
          onClickRgIconSt={()=>{console.log('个人信息')}}
          title={`${currentWd}图分类`}
          leftIconType='bullet-list'
          rightFirstIconType='user'
        />
       <Drawer
        drawerShow={this.state.drawerShow}
        onTextClick = {(text)=>{
          this.setState({
            currentWd:text
          })
        }}
        onClose={()=>{
          this.setState({
              drawerShow:false
            })
        }}/>
        <List currentWd={currentWd} equipInfo={equipInfo}/>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
