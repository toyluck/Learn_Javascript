Title         : Javascript基础
Author        : Hyc
Logo          : True

[TITLE]

## 数字
> javascript中数字是64位的浮点数，也就是64bit

其中一个bit存储数字符号；11个bit存放小数点位置，因此任何小于2^52的整数都可以安全的写成javascript数字。

e表示： 
 2.998e8==2.998*10^8；

## 自动类型转化的风险

* 如果数字和字符串相乘，javascript将尝试将字符串转换成数字
``` javascript
"number"* 5
-> NaN
```
