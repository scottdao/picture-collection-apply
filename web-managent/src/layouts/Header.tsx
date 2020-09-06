import React from 'react';
import { Layout, Icon, Avatar, Tooltip, Popover, Row } from 'antd';
import { connect } from 'dva';
import { Pop, Box, SettingBox } from '@/styles/header'

const Header = ({ userInfo, dispatch, collapsed }) => {
  const toggleSidebar = () => {
    dispatch({ type: 'layout/toggleSidebar', payload: { collapsed } });
  };

  return (
    <Layout.Header
      style={{
        background: '#fff',
        padding: '0 0.24rem',
        boxShadow: '0 2px 4px 0 rgba(50, 64, 77, .20)',
        marginBottom: '2px',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <span onClick={toggleSidebar}>
          {/* <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} style={{ fontSize: '20px' }} /> */}
        </span>

        <SettingBox>
          {/* <Icon type="bell" style={{ fontSize: '16px', margin: '0 24px' }} /> */}

          <Popover
            getPopupContainer={e => e.parentNode}
            placement="bottomRight"
            trigger="click"
            content={
              <Pop>
                <div
                  className="div-container"
                  onClick={() => {

                  }}
                >
                 退出登录
                </div>
              </Pop>
            }
            overlayClassName="user-popover"
          >
            <div className="user-popover-content">
              <Avatar
                style={{ marginRight: '8px' }}
                size="small"
                src={''}
                alt="avatar"
              />
              <div className="user-name">
                <span>ldy</span>
              </div>
            </div>
          </Popover>
        </SettingBox>
      </Box>
    </Layout.Header>
  );
};

export default connect(({ global, layout }) => ({
  collapsed: layout.collapsed,
}))(Header);
