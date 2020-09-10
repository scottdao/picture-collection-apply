
import { Spin, Space } from 'antd';
export default ({children, spinning}) => {
  return(
    <Space size="middle" >
      <Spin size="large" tip="Loading..." spinning={spinning} > {children} </Spin>
    </Space>
  )
}
