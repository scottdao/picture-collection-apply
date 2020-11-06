import React from 'react';
import { Form } from 'antd';
import crypto from 'crypto-js';
import {  components, icons } from './AntdElements';
export default ({ initialValues, encryption, layout, name, onFinish, onFinishFailed, FormItems = [] }: any)=> { 
    const eleText = (element: any, Prefix: any, Com:any) => element.text?
    <Com  {...element}  prefix={<Prefix />}>{element.text}</Com>
   :<Com {...element}  prefix={<Prefix />}></Com>
    const FormItem = ({ items,  children }: any)=> { 
        return <Form.Item
                    {...items.item}
                    >
                       {children}
                    </Form.Item>}
    const submitFinish = (values: any)=>{
       // console.log(values, encryption, 1234321)
        if(encryption){
            const field = encryption.field;
            if(!(field instanceof Array)){
                console.error(`field must be Array!`)
                return false
            }
            for (const item of field) {
                const _filed =  crypto[encryption.method] &&  crypto[encryption.method](values[item]).toString()
                values[item] = _filed;
            }
        }
        onFinish && onFinish(values);
    }
    return <Form
        {...layout}
        name={name}
        initialValues = {initialValues}
        onFinish={submitFinish}
        onFinishFailed={onFinishFailed}
        >
        {
            FormItems && FormItems.map((item: any, index: number)=>{
               
                if(item instanceof Array){
                    return <Form.Item key={index}>
                        { 
                            item.map((res, i)=>{
                                const Prefix = icons[res.element.prefix] || (()=> (<span />))
                                const Com = components[res.element.name]
                                return <FormItem items={res} key={i}>
                                                {eleText(res.element, Prefix, Com)}
                                        </FormItem> 
                                })
                        }
                    </Form.Item>
                   
                   
                }
                const Com = components[item.element.name]
                const Prefix = icons[item.element.prefix] || (()=> (<span />))
                return <FormItem items={item} key={index}>
                    {Com? 
                        eleText(item.element, Prefix, Com)
                        :
                        ""
                    }
                </FormItem>
            })
        }
    </Form>
};