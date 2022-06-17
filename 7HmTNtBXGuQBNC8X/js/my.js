var wxDownloadUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.yeecall.app", iosDownloadUrl = "https://itunes.apple.com/cn/app/yi-kuai-zui-ku-wang-luo-dian/id852211576?mt=8", androidDownloadUrl = "http://dcdn.yeecall.com/m/yeecall-release_v3.6.2166.apk", gpUrl = "https://play.google.com/store/apps/details?id=com.yeecall.app", marketurl = "market://details?id=com.yeecall.app", ewm = document
		.getElementById("wx-code"), MY = {
	isIOS : function() {
		var a = navigator.userAgent;
		return !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
	},
	isAndroid : function() {
		var a = navigator.userAgent;
		return a.indexOf("Android") > -1 || a.indexOf("Linux") > -1
	},
	isInWX : function() {
		var a = navigator.userAgent;
		return a.indexOf("MicroMessenger") > -1
	},
	isMobile : function() {
		var a = navigator.userAgent;
		return a.indexOf("Mobile") > -1
	},
	selectAndroidUrl : function() {
		return window.location.href.indexOf("&fgp=1") > 0 ? MY.isAndroid() ? marketurl
				: gpUrl
				: androidDownloadUrl
	},
	download : function() {
		MY.isInWX() ? location.href = wxDownloadUrl
				: MY.isIOS() ? location.href = iosDownloadUrl
						: location.href = MY.selectAndroidUrl()
	},
	downloadIOS : function() {
		MY.isInWX() ? location.href = wxDownloadUrl
				: location.href = iosDownloadUrl
	},
	downloadAndroid : function() {
		MY.isInWX() ? location.href = wxDownloadUrl : location.href = MY
				.selectAndroidUrl()
	},
	showEwm : function() {
		ewm.style.display = "block"
	},
	hideEwm : function() {
		ewm.style.display = "none"
	}
};
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?4ebbce73f9b2051aba0bd7213ddf9609";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);