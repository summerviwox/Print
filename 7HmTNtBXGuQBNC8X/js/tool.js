      
         function bezierEllipse(ctx, x, y, a, b)
			 {
			    var k = .5522848,
			    ox = a * k, // 水平控制点偏移量
			    oy = b * k; // 垂直控制点偏移量

			    ctx.beginPath();
			    //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
			    ctx.moveTo(x - a, y);
			    ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
			    ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
			    ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
			    ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
			    ctx.closePath();
			    ctx.stroke();
			 };    

       function getURLParameter(){
	     var urlInfo=decodeURI(window.location.href); 
         var intLen=urlInfo.length;  
				   
         var offset=urlInfo.indexOf("?")+1; 
         var strKeyValue=urlInfo.substr(offset,intLen); 
	     var params=strKeyValue.split("&");
         var param = new Object();

	     for(i=0;i<params.length;i++){
		    var arrParam=params[i].split("="); 
		    param[arrParam[0]] = arrParam[1];
	     }
	    
	     return param;
      }
       

	    function setCookie(NameOfCookie, value, expiredays)   
	    {   
	    	 var ExpireDate = new Date ();   
	 	    ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));   
	 	      
	 	    document.cookie = NameOfCookie + "=" + escape(value) +   
	 	      ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());  
	    } 
	      
	    function getCookie(NameOfCookie)   
	    {   
	    	if (document.cookie.length > 0)   
		    {   
	    		begin = document.cookie.indexOf(NameOfCookie+"=");   
			    if (begin != -1)      
			    {   
			    	 begin += NameOfCookie.length+1;//cookie值的初始位置   
					    end = document.cookie.indexOf(";", begin);//结束位置   
					    if (end == -1) end = document.cookie.length;//没有;则end为字符串结束位置   
					    return unescape(document.cookie.substring(begin, end)); 
			    }   
		    }   
		      
		    return null;  
	    }
	    
	      
	    ///删除cookie   
	    function delCookie(NameOfCookie)   
	    {   
	    	if (this.getCookie(NameOfCookie)) {   
	    	    document.cookie = NameOfCookie + "=" +   
	    	    "; expires=Thu, 01-Jan-70 00:00:01 GMT";   
	    	    }  
	    } 
	    
	    function isMobile(){
	    	var isMobile = false; //initiate as false
			// device detection
			if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
			
			return isMobile;
	    }
	    
	  
	    
	    function   chineseFromUtf8Url(strUtf8)    
	    { 
	    var   bstr   =   ""; 
	    var   nOffset   =   0; //   processing   point   on   strUtf8 
	       
	    if(   strUtf8   ==   ""   ) 
	          return   ""; 
	       
	    strUtf8   =   strUtf8.toLowerCase(); 
	    nOffset   =   strUtf8.indexOf("%e"); 
	    if(   nOffset   ==   -1   ) 
	          return   strUtf8; 
	           
	    while(   nOffset   !=   -1   ) 
	    { 
	          bstr   +=   strUtf8.substr(0,   nOffset); 
	          strUtf8   =   strUtf8.substr(nOffset,   strUtf8.length   -   nOffset); 
	          if(   strUtf8   ==   ""   ||   strUtf8.length   <   9   )       //   bad   string 
	              return   bstr; 
	           
	          bstr   +=   utf8CodeToChineseChar(strUtf8.substr(0,   9)); 
	          strUtf8   =   strUtf8.substr(9,   strUtf8.length   -   9); 
	          nOffset   =   strUtf8.indexOf("%e"); 
	    } 
	       
	    return   bstr   +   strUtf8; 
	    } 
	    
	    function   unicodeFromUtf8(strUtf8)    
	    { 
	    var   bstr   =   ""; 
	    var   nTotalChars   =   strUtf8.length; //   total   chars   to   be   processed. 
	    var   nOffset   =   0; //   processing   point   on   strUtf8 
	    var   nRemainingBytes   =   nTotalChars; //   how   many   bytes   left   to   be   converted 
	    var   nOutputPosition   =   0; 
	    var   iCode,   iCode1,   iCode2; //   the   value   of   the   unicode. 
	       
	    while   (nOffset   <   nTotalChars) 
	    { 
	    iCode   =   strUtf8.charCodeAt(nOffset); 
	    if   ((iCode   &   0x80)   ==   0) //   1   byte. 
	    { 
	    if   (   nRemainingBytes   <   1   ) //   not   enough   data 
	    break; 
	       
	    bstr   +=   String.fromCharCode(iCode   &   0x7F); 
	    nOffset   ++; 
	    nRemainingBytes   -=   1; 
	    } 
	    else   if   ((iCode   &   0xE0)   ==   0xC0) //   2   bytes 
	    { 
	    iCode1   =     strUtf8.charCodeAt(nOffset   +   1); 
	    if   (   nRemainingBytes   <   2   || //   not   enough   data 
	        (iCode1   &   0xC0)   !=   0x80   ) //   invalid   pattern 
	    { 
	    break; 
	    } 
	       
	    bstr   +=   String.fromCharCode(((iCode   &   0x3F)   <<   6)   |   (   iCode1   &   0x3F)); 
	    nOffset   +=   2; 
	    nRemainingBytes   -=   2; 
	    } 
	    else   if   ((iCode   &   0xF0)   ==   0xE0) //   3   bytes 
	    { 
	    iCode1   =     strUtf8.charCodeAt(nOffset   +   1); 
	    iCode2   =     strUtf8.charCodeAt(nOffset   +   2); 
	    if   (   nRemainingBytes   <   3   || //   not   enough   data 
	        (iCode1   &   0xC0)   !=   0x80   || //   invalid   pattern 
	        (iCode2   &   0xC0)   !=   0x80   ) 
	    { 
	    break; 
	    } 
	       
	    bstr   +=   String.fromCharCode(((iCode   &   0x0F)   <<   12)   |    
	    ((iCode1   &   0x3F)   <<     6)   | 
	    (iCode2   &   0x3F)); 
	    nOffset   +=   3; 
	    nRemainingBytes   -=   3; 
	    } 
	    else //   4   or   more   bytes   --   unsupported 
	    break; 
	    } 
	       
	    if   (nRemainingBytes   !=   0) 
	    { 
	    //   bad   UTF8   string. 
	    return   ""; 
	    } 
	       
	       
	    return   bstr; 

	    } 
	       
	    function   utf8CodeToChineseChar(strUtf8) 
	    { 
	          var   iCode,   iCode1,   iCode2; 
	          iCode   =   parseInt("0x"   +   strUtf8.substr(1,   2)); 
	          iCode1   =   parseInt("0x"   +   strUtf8.substr(4,   2)); 
	          iCode2   =   parseInt("0x"   +   strUtf8.substr(7,   2)); 
	           
	          return   String.fromCharCode(((iCode   &   0x0F)   <<   12)   |    
	    ((iCode1   &   0x3F)   <<     6)   | 
	    (iCode2   &   0x3F)); 
	    } 