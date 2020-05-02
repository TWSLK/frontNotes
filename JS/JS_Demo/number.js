//Number对象
var num1 = new Number(true);
var num2 = Number('2');
console.log(num1,typeof num1);
console.log(num2,typeof num2);

//保留小数点后几位
var num3 = 0.1+0.2;
console.log(num3.toFixed(2));
//将数字转为字符串
console.log(num3.toString());
//最大值
console.log(Number.MAX_VALUE);
//最小值
console.log(Number.MIN_VALUE);