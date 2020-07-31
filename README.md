# taro-apply
taro-study学习与开发圣地
- src
  |-api - 接口请求目录
  |-pages - 业务开发目录
  |-store - 数据状态管理目录
  |-app.scss
  |-app.tsx
  |-index.html
  package.son
  |
  tsconfig.json
  |
  global.d.ts
  |
  config
- [taro ui](https://taro-ui.jd.com/#/docs/quickstart)
- 知识点

```
    wx.navigateTo({
    url: 'test?id=1',
    events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
        console.log(data)
        },
        someEvent: function(data) {
        console.log(data)
        }
        ...
    },
    success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
    }
    })
```

##### git message
- npm install commitizen cz-conventional-changelog -g
- npm install -D commitizen cz-conventional-changelog  cz-customizable