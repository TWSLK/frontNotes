const express = require('express');
const bodyParser = require('body-parser');
var server = express();
server.listen(3000);

//托管静态资源
server.use(express.static('public'));

//格式化数据变为对象
server.use(bodyParser.urlencoded({
	extends:false;
}))

server.post('/myEmp',function(req,res){
	console.log(req.body);
	pool.query('INSERT INTO emp SET ?',[req.body],function(err,result){
		if(err) throw err;
		if(result.affectedRows){
			console.log('插入成功');
		}
	})
	res.send('添加成功');
})