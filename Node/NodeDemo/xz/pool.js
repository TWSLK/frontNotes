const mysql = require('mysql');
//创建连接池对象
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'xz',
	connectionLimit:15
});
//导出连接池对象
module.exports = pool;