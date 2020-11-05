

import React, {useState} from 'react';
import styled from 'styled-components';
import Form from '@/components/common/Form';

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};
const layoutStyle = {
  style:{
    textAlign:'right'
  }
}
const loginLayout = {
  wrapperCol: { offset: 0, span: 24 },
}
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
const LoginIndex = () => {
  
  const formData = {
    initialValues:{ remember: true },
    layout:{
      labelCol: { span:0, style:{textAlign:"right"} },
      wrapperCol: { span: 24 },
    },
    onFinish:(values: any)=>{
      console.log('Success:', values);
    },
    onFinishFailed:(errorInfo: any)=>{
      console.log('Failed:', errorInfo);
    },
    name:'basic',
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
    {
      item:{
        name:'remember',
        valuePropName:'checked',
        wrapperCol: { offset: 0, span: 24 },
        style:{
          textAlign:'right'
        }
      },
      element:{
        name:'Checkbox',
        text:"记住密码"
      }
    },
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
  return (
    <FormBox style={{height:'280px', width:'350px'}}>
       <Form {...formData}/>
    </FormBox>
  );
};
export default LoginIndex
