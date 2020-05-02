//引入url模块
const url = require('url');
//
var str = 'http://www.codeboy.com:80/list/product.html?lid=5&name=dell';
//将url格式化成对象
url.parse(str);

var obj = {
	protocol:'https',
	hostname:'www.tmooc.cn',
	port:80,
	pathname:'/course/1001.html',
	query:{
		cid:18,
		cname:'javascript'
	}
}

//将对象转换成url
console.log(url.format(obj));