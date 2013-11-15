var dbo = require('../Base/dbo.js');
var config = require('../Base/config');
var Valid = require('../Base/valid');

var blogCtrl = {
	// fucntion声明时的名称并没有用,在定义的作用域中调用还是会报undefined错误,  此处写上名字只是为了可以在函数内部调用callee时可以有function name
	create: function newBlog(req, res){
    }


};

module.exports = blogCtrl;
