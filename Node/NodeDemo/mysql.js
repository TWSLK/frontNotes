//引入mysql模块
const mysql = require('mysql');

//创建连接
var connection = mysql.createConnection({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'root',
	database:'odba'
});

//执行连接
connection.connect();
//执行sql语句
connection.query('SELECT * FROM user',function(err,result){
	if(err) throw err;
	//打印sql语句的结果
	console.log(result);
});
//删除操作
connection.query('DELETE FROM user where userid = u001',function(err,result){
	if(err) throw err;
	if(result.affectedRows>0){
		console.log('数据删除成功');
	}else{
		console.log('删除失败');
	}
})
//修改操作
connection.query('UPDATE user SET uname = 111  where userid = u001',function(err,result){
	if(err) throw err;
	if(result.affectedRows>0){
		console.log('数据修改成功');
	}else{
		console.log('修改失败');
	}
})
//修改操作
connection.query('INSERT INTO user VALUES(u001,1,1)',function(err,result){
	if(err) throw err;
	if(result.affectedRows>0){
		console.log('数据插入成功');
	}else{
		console.log('插入失败');
	}
})
//关闭连接
connection.end();
