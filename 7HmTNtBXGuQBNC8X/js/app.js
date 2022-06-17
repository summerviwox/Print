


$(function() {








	$("#swiper-wrapper").fullpage({
		// anchors : [ 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8','p9' ],
		verticalCentered : !0,
		css3 : !0,
		// navigation : $(window).width()<768?0:1,
		// navigationPosition : "right",
		scrollOverflow : 0,
		scrollingSpeed : 500
	});


	$("#start_btn").on("click",function (e) {
        $(".login").animate({opacity:0},500,function (e) {
            $(".login").css({display:"none"});
            $(".swiper-container").animate({opacity:1},500);
        })
    });

    $("#login_btn").on("click",function (e) {
        if ($("#name_field").val().length==0){
            alert("请输入钉钉名");
            return;
        }

        if ($("#code_field").val().length != 4){
            alert("输入身份证后四位");
            return;
        }

        var url = "http://alpha.mytongche.com/auth/dingding?nick="+$("#name_field").val()+"&code="+$("#code_field").val();


        $.ajax({
            url: url,
            type: "GET",
            data: "",
            dataType: 'json',
            success: function (data) {
                if (data){
                    if(data["code"]==200){
                        window.location.href = data["result"]["redirect"]
                    }else{
                        alert(data["message"]);
                    }
                } else{
                    alert("网络错误请稍后再试");
                }
            },
            error: function (err) {
                alert("网络错误请稍后再试");
            },
        });
    })

    function callServer(url, callBackFunc, type, data, async, beforeSend, complete) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            dataType: 'json',
            async: async ? async : false,
            success: function (data) {
                callBackFunc(data);
            },
            beforeSend: beforeSend,
            complete: complete
        });
    }
	
});


