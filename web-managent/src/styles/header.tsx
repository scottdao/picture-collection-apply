import styled from 'styled-components';
export  const Pop:Object = styled.div`
  width: 150px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  .div-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 14px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: rgba(102, 102, 102, 1);
    }
    :hover {
      background: rgba(231, 243, 255, 1);
      color: rgba(24, 144, 255, 1);
      a {
        color: rgba(24, 144, 255, 1);
      }
    }
    .badge {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: red;
      color: #fff;
      text-align: center;
      line-height: 20px;
      margin-right: 5px;
    }
  }
`;

export const Box:Object = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
export const SettingBox:Object = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-left: auto;
  .user-name {
    display: inline-block;
    max-width: 84px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ant-popover {
    padding-top: 0;
    .ant-popover-arrow {
      display: none;
    }
  }
  .message-popover {
    .ant-popover-title {
      padding: 0;
    }
    .ant-popover-inner-content {
      padding: 0;
    }
  }
  .user-popover {
    .ant-popover-inner-content {
      padding: 0;
    }
  }
  .user-popover-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    cursor: pointer;
    :hover {
      background-color: rgba(247, 247, 247, 1);
    }
  }
`;
