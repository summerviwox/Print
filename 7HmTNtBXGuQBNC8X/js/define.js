var isDebug = true;
var showLog = true;


var CROSS_DOMIN = "/httpProxy/ajaxproxy/?url=";
var SERVE = "http://crm-dev.pnlyy.com/api/";
//var SERVE = "/api/";
var SERVE_PATH = isDebug?CROSS_DOMIN+SERVE:SERVE;
	

var GET_WEHCAT_CONFIG = 1001;

var I_GET_WEHCAT_CONFIG = "user/get-wx-signature?";

var I_ADD_PRE_USER = SERVE_PATH+"preuser/add-pre-user";


var getPathForGetMethod = function(type,parament){
	
	var url = "";
	switch(type){
	
	case GET_WEHCAT_CONFIG:
		url = I_GET_WEHCAT_CONFIG;
		break;
	case GET_TEACHER_TIMETABLE:
		url = I_GET_TEACHER_TIMETABLE;
		break;
	default:
		break;
	}
	
	
	if(url.length>0){
		var normalUrl = SERVE+url+parament;
		if(isDebug){
			return CROSS_DOMIN+window.encodeURIComponent(normalUrl);
		}else{
			return normalUrl;
		}
		
	}else{
		return "";
	}
}

var nslog = function(object){
	if(showLog){
		console.log(object);
	}
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}