function gotoAppStore(type){
		var url = "";
		switch(type){
			case 1:
			url = "http://www.pnlyy.com";
			break;
			case 2:
			url = "http://www.iyuesai.com/m/download.html";
			break;
			case 3:
			url = "http://m.lancome.com.cn";
			break;
			case 4:
			url = "https://itunes.apple.com/jp/app/zippi/id932344658&mt=8";
			break;
		
		}
		
		window.location.href = url;
	}
	
	
$(function() {
	
	
	$("#swiper-wrapper").fullpage({
		anchors : [ 'p1', 'p2', 'p3', 'p4' ],
		verticalCentered : !0,
		css3 : !0,
		navigation : $(window).width()<768?0:1,
		navigationPosition : "right",
		scrollOverflow : 0,
		scrollingSpeed : 500
	})
	
	
	 
	
});