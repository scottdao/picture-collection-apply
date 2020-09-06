import React, { useEffect, useState } from 'react';
import { ConfigProvider, Layout } from 'antd';
import { connect } from 'dva';
// import cookie from 'cookie_js';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Header from './Header';
import Sidebar from './Sidebar';
moment.locale('zh-cn');
const BaseLayout = ({ children, dispatch }) => {
  const [count, setCount] = useState(0);
  const resize = () => {
    const html = document.documentElement;
    const cw = html.clientWidth;
    const { clientHeight } = html;
    const rem = cw / 19.2;
    html.style.fontSize = `${rem}px`;
    dispatch({
      type: 'layout/resize',
      payload: { rem, clientHeight },
    });
  };
  useEffect(() => {
    resize();
    const e = 'orientationchange' in window ? 'orientationchange' : 'resize';
   window.addEventListener(e, resize);
  }, []);
  return (
    <ConfigProvider locale={zhCN} getPopupContainer={e=>e.parentNode}>
     <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <div style={{ height: 'calc(100vh - 66px)', overflowY: 'hidden' }}>{children}</div>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
export default connect()(BaseLayout);
