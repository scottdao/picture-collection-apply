import { ComponentClass } from 'react'
import Taro, { Component, Config,useState, useEffect } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtToast } from 'taro-ui'
const Toast = ({text, open }) =>(<AtToast isOpened={open} text={text} duration={1000}></AtToast>)
export { Toast }
