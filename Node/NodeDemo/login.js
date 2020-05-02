var express = require("express");
var pool = require('./pool.js');
let router = express.Router();

router.get("/login",(req,res) => {
	var u = req.query.uname;
	var s = req.query.pwd;
	var sql = "SELECT userid FROM user WHERE username = ? and password = ?";
	pool.query(sql,[u,s],(err,result) => {
		if(err) throw err;
		if(result.length == 0){
			res.jon({code:-1,msg:"用户名或者密码错误！"});
		}else{
			res.json({code:200,msg:"登录成功！",name:u});
		}
	})
})

module.exports = router;