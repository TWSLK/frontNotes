//引入express
const express = require('express');
//引入连接池模块
var pool = require('../pool.js');
//创建路由器对象
var router = express.Router();
//添加路由器
//用户注册
router.post('/reg',function(req,res){
	//获取数据
	console.log(req.body);
	//验证数据是否为空
	if(!req.body.uname){
		res.send({code:401,msg:'uname required'});
		//阻止往后执行
		return;
	}
	if(!req.body.upwd){
		res.send({code:402,msg:'upwd required'});
		//阻止往后执行
		return;
	}
	if(!req.body.email){
		res.send({code:403,msg:'email required'});
		//阻止往后执行
		return;
	}
	if(!req.body.phone){
		res.send({code:404,msg:'phone required'});
		//阻止往后执行
		return;
	}
	//把数据插入到数据库
	pool.query('INSERT INTO xz_user SET ?',[res.body],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			// res.send('注册成功');
			res.send({code:200,msg:'register success'})
		}
	});
});

router.post('/login',function(req,res){
	//获取数据
	console.log(req.body);
	//验证数据是否为空
	if(!req.body.uname){
		res.send({code:401,msg:'uname required'});
		//阻止往后执行
		return;
	}
	if(!req.body.upwd){
		res.send({code:402,msg:'upwd required'});
		//阻止往后执行
		return;
	}
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[req.body.uname,req.body.upwd],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send({code:200,msg:'login success'});
		}
	});
});

router.get('/delete',function(req,res){
	//获取数据
	console.log(req.query);
	//验证数据是否为空
	if(!req.query.uid){
		res.send({code:405,msg:'uid required'});
		//阻止往后执行
		return;
	}
	pool.query('DELETE FROM xz_user WHERE uid=?',[req.query.uid],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'delete success'});
		}else{
			res.send({code:301,msg:'delete error'});
		}
	})
})

router.get('/detail',function(req,res){
	//获取数据
	console.log(req.query);
	//验证数据是否为空
	if(!req.query.uid){
		res.send({code:405,msg:'uid required'});
		//阻止往后执行
		return;
	}
	pool.query('SELECT * FROM xz_user WHERE uid=?',[req.query.uid],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send({code:301,msg:'select error'});
		}
	})
})

router.get('/update',function(req,res){
	//获取数据
	console.log(req.query);
	//验证数据是否为空
	if(!req.query.uid){
		res.send({code:405,msg:'uid required'});
		//阻止往后执行
		return;
	}
	pool.query('UPDATE xz_user SET email=? NAD phone=? AND uname=? AND sex=? WHERE uid=?',[req.query.email,req.query.phone,req.query.uname,req.query.sex,req.query.uid],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'update success'});
		}else{
			res.send({code:301,msg:'update error'});
		}
	})
})

router.get('/list',function(req,res){
	//获取数据
	console.log(req.query);
	var pno = req.query.pno;
	var count = req.query.count;
	//验证数据是否为空
	if(!pno){
		pno = 1;
	}
	if(!count){
		count = 2;
	}
	//将数据转为整型
	pno = parseInt(pno);
	count = parseInt(count); 
	var start = (pno - 1)*count;
	pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,count],function(err,result){
		if(err) throw err;
		res.send(result);
	})
})
//导出路由器
module.exports = router;
