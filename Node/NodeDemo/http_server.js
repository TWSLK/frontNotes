const http = require('http');

//创建web服务器
var server = http.createServer();
//分配端口,监听端口的编号
server.listen(3000);

//服务器接收浏览器的请求,做出响应
//使用事件的形式来接受请求，当有请求发生会自动触发该事件
//使用回调函数来做出响应
server.on('request',function(req,res){
	//req 请求的对象
	console.log(req.url,req.method);
	console.log(req.headers);
	//res 响应的对象
	//设置响应的状态码和头信息
	res.writeHead(200,{
		Server:'web1902',
		'Content-Type':text/html
	})
	//响应重定向
	res.writeHead(302,{
		Location:'http://www.tmooc.cn'
	})
	//设置响应内容
	res.write('homepage');
	//根据请求做出响应
	//如果请求的URL是/index  响应 Index
	//如果请求的URL是/list   响应 List
	if(req.url == '/index'){
		res.write('Index');
	}else if(req.url == '/list'){
		res.write('List');
	}else{
		res.write('404');
	}
	//结束响应，发送响应内容
	res.end();
})