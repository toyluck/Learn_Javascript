Title         : 表单

Author        : Hyc
Affiliation   : 
Email         : toylucklebo@outlook.com

Bibliography  : example.bib

[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel

# 表单的基础知识

## 提交表单

## 重置表单

##表单字段
elements 是所有表单字段的集合.

### 共有的表单字段属性
除了form 字段外,可以动态修改其他任何属性.

### 共有的表单字段方法
> 每个表单字段都有 focus 和 blur 两个方法.

要注意的是 假如 使用 focus 方法的 元素 的 type 特性值为 hidden 或者 css 的display和visibility 属性隐藏了该元素,都会**导致错误**

html5 增加了 autofocus 属性,支持该属性的浏览器中,会自动移焦

### 共有的表单字段事件

&ballotbox; blur 

&ballotbox; change : 对于 input 和 textarea 元素,在他们失去焦点且value值改变时触发, 对于 select 元素,在其选项改变时触发

&ballotbox; focus

要注意的是 当change和focus 都会触发时,并不能确定他们触发的顺序.

# 文本框脚本






~ End MainPanel