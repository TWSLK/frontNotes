#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE IF EXIST xx;
#创建数据库，设置存储的编码为UTF8
CREATE DATABASE xx CHARSET=UTF8;
#进入数据库
USE xx;
#创建保存用户数据的表
CREATE TABLE user(
	uid INT,
	uname VARCHAR(16),
	upwd VARCHAR(32),
	email VARCHAR(32),
	phone VARCHAR(11),
	sex VARCHAR(1),
	userName VARCHAR(12),
	regTime VARCHAR(10),
	isOnline VARCHAR(1)	
);