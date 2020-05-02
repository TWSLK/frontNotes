var express = require("express");
var pool = require('./pool.js');
let router = express.Router();

router.get('/register',(req,res) => {
	var uid = req.query.uid;
	var uname = req.query.uname;
	var pwd = req.query.pwd;
	var sql = "INSERT INTO user(uid,username,password) VALUES(?,?,?)";
	pool.query(sql,[uid,uname,pwd],(err,result => {
		if(err) throw err;
		if(result.affectedRow == 0){
			res.json({code:-1,msg:"注册失败！"});
		}else{
			res.json({code:200,msg:"注册成功！"});
		}
	}))
})

module.exports = router;