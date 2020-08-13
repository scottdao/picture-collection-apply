# API 接口文档

> 所有服务端返回的数据内容格式均为：
> ```json
> {
>   "code": 0,
>   "info": "ok",
>   "data" : []
> } 
> ```
> 或
> ```json
> {
>   "code": 0,
>   "info": "ok",
>   "data" : {}
> }
> ```
> `Code` 代表状态码，`info` 表示相应状态的提示，必要的话可以展示给用户。`data` 才是开发人员关心的数据内容。
> ******
> 所有 `url` 中，用 `{}` 包含的字符串，均表示变量，而不是字符串。
> 
> 比如获取用户信息的
> path: `/user/info/{uid}`
> 
> 对于 `uid=uid_123456` 的用户来说，他的 path 应为 `/user/info/uid=uid_123456`

******

## 1、图片相关

*  获取图片分类列表：

> PATH: `/pic/catagory/uid` 
>
> Method: `GET`
> 
> 参数：无
> 
> Response: 
> ```json
> {
>   "code": 0,
>   "info": "ok",
>   "data" : [
>       {
>           "name": "美女",
>           "id":   1234,
>       },
>       {
>           "name": "性感",
>           "id":   1235,
>       },
>   ]
> }
> ```


* 获取图片列表

> PATH: `/pic/{catagory_id}/{page_number}/`
> 
> method: `GET`
> 
> 参数：见 `path`
> 
> Response: 
> ```json
> {
>   "code": 0,
>   "info": "ok",
>   "data" : [
>       {
>           "original": "liudaoyun",
>           "hd":       "hd_liudaoyun"
>       }
>   ]
> }
> ```


## 2、管理员

* 图片分类
> action = {delete, update, create}
> 
> path: `/administrator/{action}/`
>
> 参数：
> ```json 
> {
>   "name": "美女",
>   "id": 123, // 新建的时候不需要，删除和更改一定要
> }
> ```
> Method: `POST`
> ```json
> {
>   "code": 0,
>   "info": "ok",
>   "data": ""
> }
> ```

* 图片上传

> path: `/administrator/upload/`
> 
> Method: `Post`
> 
> 参数：
> ```json
> {
> "info": /* 后面的转成 json 字符串 */[
>       {
>           "name": "liudaoyun",
>          "tags": [
>               1234, 1235, 1236 // 图片分类的 id
>           ]
>       },
>       {
>           "name": "liudaoyun",
>           "tags": [
>               1234, 1235, 1236 // 图片分类的 id
>           ]
>       }
>   ]
> }
> ```
> Response:
> ```json
> {
>   "code": 0,
>   "info": "ok",
>   "data": ""
> }
> ```

* 查询服务器是否包含该图片
> path: `/administrator/check/` (支持查询多张图片)
> 
> Method: `GET`
>
> 参数：
> ```json
> {
>   "md5s": [
>       "1a456cd3ef812eb", "1a456cd3ef812eb" // 图片的 md5 值
>   ]
> }
> ```
> Response:
> ```json
> {
>   "code": 0,
>   "info": "ok",
>   "data": [ // 如果包含，返回图片的地址，否则返回空字符串
>       "", "12345678", "1a456cd3ef812eb"
>   ]
> }
> ```
