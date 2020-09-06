import React from 'react';
// import Link from 'umi/link';
import {withRouter, Link} from 'umi';
import { Layout, Menu } from 'antd';
import { connect } from 'dva';
const { Sider } = Layout;
const { SubMenu, Item } = Menu;
const SideBar = ({ location, collapsed, isRemovedSidebar,  rem }) => {
  const selectKey = location.pathname;
  let width = isRemovedSidebar ? 0 : rem * 2.56;
  if (width < 170) width = 170;
  return (
    <Sider
      collapsed={collapsed}
      width={width}
      trigger={null}
      collapsible
      style={{ overflow: 'auto', height: '100vh', zIndex: 1000 }}
    >
      <div
        style={{
          width: '100%',
          height: '64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: collapsed ? 'flex-start' : 'center',
          overflow: 'hidden',
          background: '#002140',
          alignItems: collapsed ? 'center' : 'flex-start',
        }}
      >
      图
        {/* {!collapsed ? (
          <img
            alt="logo"
            src="https://cdn-global1.unicareer.com/official-project/image/up18-10-1655901732t6.svg"
            style={{
              display: 'inline-block',
              width: '62.5%',
              minWidth: '115px',
              maxWidth: '150px',
              position: 'relative',
              overflow: 'hidden',
              left: '24px',
            }}
          />
        ) : (
          <img
            alt="logo"
            src="http://uniprofile.oss-cn-shanghai.aliyuncs.com/official-project/1528789893703-Unilogo2x.png"
            style={{
              width: '70px',
              display: 'inline-block',
              height: '64px',
              position: 'relative',
            }}
          />
        )} */}
      </div>
      {/* <Menu theme="dark" mode="inline" selectedKeys={[selectKey]} defaultOpenKeys={[subMenuKey]}>
        {SubMenuTree(SliderLinks)}
      </Menu> */}
    </Sider>
  );
};

export default withRouter(
  connect(({ layout, global }) => ({
    collapsed: layout.collapsed,
    rem: layout.rem,
    isRemovedSidebar: layout.isRemovedSidebar,
    // user: global.user,
  }))(SideBar),
);
