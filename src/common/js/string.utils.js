export default {
		/**
		 * 是否为空
		 * @param str
		 * @returns {Boolean}
		 */
		isEmpty:function(str){
			return str == undefined || str == null || str.length == 0 || str == "null";
		},
		/**
		 * 字符串分割
		 * @param str 字符源串
		 * @param breakSign 分隔符
		 * @returns 如果字符串为空(undefined,null,""),返回null
		 */
		split:function(str,breakSign){
			if (this.isEmpty(str)) {
				return null;
			}
			var temp = ",";
			if (!this.isEmpty(breakSign)) {
				temp = breakSign;
			}
			return str.split(temp);
		},
		replaceNull:function(str){//替换null为''
			var result = str;
			if (this.isEmpty(str)) {
				result = "";
			}
			return result;
		},
		myReplace:function(str,f,e){//把字符str中的f替换成e
			return str.replace(new RegExp(f,"gm"),e); 
		},
		showFixLength:function(value,length) {//控制显示长度
			//设置固定长度
			var LENGTH = 20;
			if (length != undefined && length > 0) {
				LENGTH = length;
			}
			var result = value;
			if (value.length > LENGTH) {
				result = value.substr(0, LENGTH) + "...";
			}
			return result;
		},
		lrTrim: function(s){//去左右空格;
				console.log("激活"+s);
			  return s.replace(/(^\s*)|(\s*$)/g, "");
		}
		
		
}

