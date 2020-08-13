import { ComponentClass } from 'react'
import Taro, { Component, Config,useState, useEffect } from '@tarojs/taro'
import { AtToast } from 'taro-ui'
const Toast = ({text, open }) =>(<AtToast isOpened={open} text={text} duration={1000}></AtToast>)
const MessageInfo = ({text, type}) =>{
  // let options = { title: text,  duration: 2000, icon:type}
  // if(type=='error'){
  //   options.image = ''
  // }
 return  Taro.showToast({ title: text,  icon:type})
}
export { Toast, MessageInfo }
