Title         : 离线应用与客户端存储

Author        : Hyc
Email         : toylucklebo@outlook.com

[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel
> 离线Web 是HTML5 的另一个重点.

# 离线监测

1. navigator.onLine= 布尔值 ;  设置是在线还是离线

2. online,事件
3. offline , 事件

# 应用缓存
> HTML5 的应用缓存,简称 appcache. 实际就是从浏览器的缓存中分出来的一块缓存区. 使用 描述文件,列出要下载和缓存的资源.

将描述文件与页面关联,需要指定这个文件的路径:
`<html manifest="/offline.manifest">`

# 数据存储
> 直接在客户端上存储用户信息能力的要求

## Cookie

### 限制
* cookie 在性质上是绑定在特定的域名下的.
* cookie 总数有限


### cookie 的构成

* 名称 : 不分大小写,且必须经过URL 编码
* 值: URL编码
* 域: 对哪个域有效.没有明确设定,会被认作来自设置cookie 的那个域
* 路径 : 
 
~ End MainPanel