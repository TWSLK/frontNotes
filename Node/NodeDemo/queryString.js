//引入查询字符串模块
const querystring = require('querystring');
//获取查询字符串中的数据
var str = 'key=电脑&lid=20';
//使用查询字符串模块下的方法将查询中格式化成对象
var obj = querystring.parse(str);
console.log(obj);
//将对象转换成查询字符串
var str2 = querystring.stringify(obj);
console.log(str2);
