define(function(require, exports, module) {
	var P={
		yanzheng:function(){
			var name=/^[\u4e00-\u9fa5]+$/;
			var val = $('#jbxxi .xingming').val()
			if(!name.test(val)){
	            return;
	        }
		}
	}
	module.exports = {
		init:P.yanzheng
	}

});