import {  Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
const components: any = {
    Input,
    'Input.Password':Input.Password,
    Button,
    Checkbox
};
const icons: any = {
    UserOutlined,
    LockOutlined
}
 export {
    components,
    icons
 }