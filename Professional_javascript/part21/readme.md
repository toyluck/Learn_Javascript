Title         : Ajax 与Comet

Author        : Hyc  

[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel
# XMLHttpRequest对象

同18章一样,IE 可能会遇到  MSXML2.XMLHttp,MSXML2.XMLHttp.3.0和MSXML2.XMLHttp.6.0 三个版本.
如果只想支持IE7+ ,直接使用
`var xhr = new XMLHttpRequest()`
即可

## XHR 的用法

1. 调用 `open()`,以备发送,它接受三个参数
  1. 请求类型 'get' or `post`
  2. 请求的URL
  3. 是否异步发送的 布尔值
2. `send()`
   * 是否作为请求主体的 布尔值
   
3. 同步请求获得 XHR 对象的属性
   1. responseText : 响应主体被返回的文本
   2. responseXML  : 响应数据的XML DOM文档
   3. status : 响应的HTTP状态
     - 200  : 成功
     - 304  : 请求的资源没被修改,可直接使用浏览器中缓存的版本
   4. statusText : HTTP状态的说明

4. 异步
   1. 检测readyState 属性

5. abort()
   : 异步中断

## GET请求

查询字符串必须经过正确的编码,也就是必须使用 `encodeURIComponent()`

## POST 请求
> `send()` 发送的数据主体作为 参数
默认情况下,POST请求和提交Web表单的请求不会一视同仁,可将 Content-Type 头信息设置为 `application/x-www-form-urlencoded`,来模仿表单

# XMLHttpRequest 2级
> 这些方法 并不支持所有浏览器

## FormData
> 表单的序列化
```JavaScript
   var data=new FormData();
  // 传入表单元素
   data.append("name","Hyc");
```
直接传入 send()方法,不必明确的在XHR 对象上设置请求头部

## 超时设定

IE8+ 为XHR 对象设置了 一个 `timeout` 属性,单位为 毫秒.会调用`ontimeout()` 事件处理程序

## overrideMimeType()方法
重写XHR **响应的MIME** 类型

## 进度事件
1. loadstart
2. progress
3. error
4. abort
5. load  ;ie8+ 只支持这个
6. loadend ; none

### load事件

### progress 事件
> 在浏览器接受新数据期间 周期性的触发
`onprogress` 接受到 一个 `event` 对象,其target 属性时XHR 对象,包含下列三个额外的属性:
1. lengthComputable; 进度信息是否可用的布尔值
2. position ; 已经接受的字节数
3. totalSize ; 根据 Content-Length 响应头部确定的预期字节数

必须在调用 `open()` 之前添加 该事件

# 跨源资源共享
> XHR 对象只能访问与包含它的页面位于同一个域中的资源.CORS(Cross-Origin Resource Sharing),使用自定义的HTTP 头部,让浏览器和服务器进行沟通,从而决定请求或响应 成功或失败.

假如一个请求没有自定义头部,主体内容是 text/plain,发送该请求时,给它附加一个 Origin 头部.
`Origin: http://www.custom.com`
如果服务器认为这个请求可以接受:
`Access-Control-Allow-Origin : http://www.custom.com`


## IE 对 CORS 的实现
> IE8 中引入 XDR(XDomainRequest) 类型.与 XHR 相似,但是它可以 安全跨域通信.





~ End MainPanel