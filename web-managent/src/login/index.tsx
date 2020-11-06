

import React, {useState} from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import Form from '@/components/common/Form';

const FormBox = styled.div`
   padding:30px;
  .ant-btn-primary{
    width:100%;
  }
   background-color:rgba(255,255,255,0.5);
   border-radius:8px;
   position: absolute;
   top: 50%;
   transform: translate(-50%, -50%);
   left: 50%;
  .anticon{
    color:rgba(0,0,0,0.6);
  }
`;
const formData = {
  initialValues:{ remember: true, username:'scottLdy', password:"123456" },
  layout:{
    labelCol: { span:0, style:{textAlign:"right"} },
    wrapperCol: { span: 24 },
  },
  encryption:{
    field:['password'],
    method:'SHA256'
  },
  
  onFinishFailed:(errorInfo: any)=>{
    console.warn('Failed:', errorInfo);
  },
  name:'login',
  FormItems:[
    {
      item:{
        name:'username',
        rules:[{ required: true, message: '请输入用户名/手机号或者邮箱！' }],
        label:'',
        wrapperCol: { offset: 0, span: 24},
      },
      element:{
        name:'Input',
        placeholder:'用户名/手机号或者邮箱',
        prefix:'UserOutlined'
      }
    },
    {
      item:{
        name:'password',
        rules:[{ required: true, message: '请输入密码！' }],
        label:'',
        wrapperCol: { offset: 0, span:24},
      },
      element:{
        name:'Input.Password',
        placeholder:'密码',
        prefix:'LockOutlined'
      }
    },
    [{
      item:{
        name:'remember',
        valuePropName:'checked',
        // noStyle: true,
        style:{
          textAlign:'left',
          display:"inline-block",
          width:'50%'
        }
      },
      element:{
        name:'Checkbox',
        text:"记住密码"
      }
    },{
      item:{
        name:'auto',
        valuePropName:'checked',
        style:{
          textAlign:'right',
          display:"inline-block",
          width:'50%'
        }
      },
      element:{
        name:'Checkbox',
        text:"自动登录"
      }
    }],
    {
      item:{
          wrapperCol: { offset: 0, span: 24 }
      },
      element:{
        name:'Button',
        type:'primary',
        htmlType:'submit',
        text:'登录'
      }
    }
  ]
}
const LoginIndex = ({history}: any) => {
 // console.log(history)
  return (
    <FormBox style={{minHeight:'280px', minWidth:'350px'}}>
       <Tabs defaultActiveKey="1"  centered>
        <TabPane tab="登录" key="1">
          <Form 
            {...formData} 
            onFinish={
              (values: any)=>
              {
                console.log(values, 123321)
                history.push('/index')           
              }
            }
          />
        </TabPane>
      </Tabs>
    </FormBox>
  );
};
export default LoginIndex
