//将字符串包装成对象
var str = 'a';
var str1 = new String('a');
//还是String 将数字转为字符串
var str2 = String('a');
console.log(str,typeof str);
console.log(str1,typeof str1);
console.log(str2,typeof str2);

//String中的API
var str = 'Hhjk';
//讲英文字母转大写
console.log(str.toUpperCase());
//讲英文字母转小写
console.log(str.toLowerCase());

//初始化4个英文字母
var code = 'soSA';
//无限循环弹出提示框
while(true){
	var str = prompt('input code');
	//判断输入的和生成验证码是否一致
	//都转成大写 或都转成小写再比较
	if(str.toUpperCase() == code.toUpperCase()){
		break;
	}
}

//查看字符串长度 无论中文还是英文都是一个字符
console.log(str.length);
//查看下标对应的字符
console.log(str[1]);
console.log(str.charAt(6));
//查看任意字符的Unicode码
console.log('a'.charCodeAt());
//查看某个字符的下标 数字代表开始的下标
console.log(str.indexOf('s',2));
//查看字符最后一次出现的下标
console.log(str.lastIndexOf('a'));

//截取字符串
console.log(str.slice(4));
//截取子字符串 第一个数字是开始位置 第二个数字是个数
console.log(str.substr(6,4));
//按照指定的字符将字符串转数组
str.split(',')

//匹配模式
//只替换第一个
str.replace('cc','dd');
//全局查找 -g
//忽略大小写 -i
str.replace(/cc/gi,'dd');
//查找
str.match(/cc/g);
//搜索
str.search(/cc/g);