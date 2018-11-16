document.writeln('Hello world!');

// 用一个method方法去定义新方法
Function.prototype.method = function(name,func){
	this.prototype[name] = func; // 字典
	return this;
}

alert(isNa == NuN);