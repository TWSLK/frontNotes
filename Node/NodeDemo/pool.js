const mysql = require("mysql");

//创建连接池对象
let pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	password:"root",
	database:"travelhelper",
	connectionLimit:10
})

//插入对象
pool.query('INSERT INTO user SET ?',[person],function(err,result){
	if(err) throw err;
	if(result.affectedRow){
		console.log('插入成功');
	}else{
		console.log('插入失败');
	}
})

//修改
pool.query('UPDATE emp SET salary=?,sex=? WHERE eid=?',[salary,sex,eid],function(err,result){
	if(err) throw err;
	if(result.affectedRow){
		console.log('修改成功');
	}else{
		console.log('修改失败');
	}
})

//删除
pool.query('DELETE FROM emp WHERE eid=?',[eid],function(err,result){
	if(err) throw err;
	if(result.affectedRow){
		console.log('删除成功');
	}else{
		console.log('删除失败');
	}
})

console.log("数据库连接成功！")
module.exports = pool;