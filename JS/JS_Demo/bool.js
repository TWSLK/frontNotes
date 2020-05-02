//false:'',null,undefined,NaN,0
var a = new Boolean(0);
var b = new Boolean({});
console.log(a);
console.log(b);
//将a转为布尔型
console.log(!!a);