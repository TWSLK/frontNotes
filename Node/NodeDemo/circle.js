function getC(r){
	return 2*Math.PI*r;
}

function getArea(r){
	return Math.PI*Math.pow(r,2);
}

//导出
module.exports.getC = getC;
module.exports.getArea = getArea;

//导出后module.exports不等于exports 两者没有关系
module.exports = {
	getC:getC,
	getArea:getArea
}