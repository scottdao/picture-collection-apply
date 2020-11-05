import React from 'react';
import { Form } from 'antd';
import {  components, icons } from './AntdElements';
export default ({ initialValues, layout, name, onFinish, onFinishFailed, FormItems = [] }: any)=> { 
    return <Form
        {...layout}
        name={name}
        initialValues = {initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
        {
            FormItems && FormItems.map((item: any, index: number)=>{
                const Com = components[item.element.name]
                let Prefix = icons[item.element.prefix] || (()=> (<span />))
                // const element = item.element instanceof Array ? item.element.map((it: any)=>it.name):item.element;
                return <Form.Item
                    {...item.item}
                    key={index}
                    >
                        {Com? 
                            (item.element.text?
                             <Com  {...item.element}  prefix={<Prefix />}>{item.element.text}</Com>
                            :<Com {...item.element}  prefix={<Prefix />}></Com>)
                        :
                        ""}
                    </Form.Item>
            })
        }
    </Form>
};