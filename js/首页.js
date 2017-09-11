setTimeout(function(){
	$("#top_ad").children("img").css("opacity","1")
	$("#baidu").animate({
		"left":"100%",
	},500,function(){
		$(this).hide()
		$("#baidu_img").css("display","block")
	})
},3000)

//轮播图上的导航栏
var timer=null;
var t=0;
function go(){
	timer=setInterval(function(){
		t++;
		if(t>4){
			t=0;
		}
		$(".home_ad").css("marginLeft",-t*100+"%");
		$(".on").css("background","none");
		$('.on').eq(t).css("background","#ccc");
	},3000)
}
go();
$(".on").click(function(){
	clearInterval(timer);
	t=$(this).index();
	$(".on").css("background","none");
	$(this).css("background","#ccc");
	$(".home_ad").css("marginLeft",-t*100+"%");
})
$('#pot').mouseleave(function(){
	clearInterval(timer);
	go();
	console.log(2)
});

$(".left_nav_name").mouseover(function(){
	$(this).css("background","lightskyblue")
	$(this).children("ol").show()
})
$(".left_nav_name").mouseout(function(){
	$(this).css("background","none")
	$(this).children("ol").hide()
})
// 向上滚动函数
var timer2=null;
function go2(){
	timer2=setInterval(function(){
		var l=$('#ol_l').position().top;
		var o=$('#ol_o').position().top;
		if(l <= -430){
			l=430
		}
		if(o <= -430){
			o=430
		}
		$('#ol_l').css({
			top:l-1,
		})
		$('#ol_o').css({
			top:o-1,
		})
	},30)
}
go2();
$('.job_up').hover(function(){
	clearInterval(timer2)
},function(){
	go2()
})
//我在蓝鸥
$("#con3_title_left").click(function(){
	$("#con3_title_right").css("color","#666")
	$(".con3_pic").css("margin-left","-1200px")
	$(this).css("color","#999")
})
$("#con3_title_right").click(function(){
	$("#con3_title_left").css("color","#666")
	$(".con3_pic").css("margin-left","0px")
	$(this).css("color","#999")
})
//查看更多hover
$('.last_item a').hover(function(){
	$(this).css({
		background:$(this).css("color"),
		color:"#fff"
	})
},function(){
	$(this).css({
		background:"#FFF",
		color:$(this).css("backgroundColor"),
	})
})
//动画
$('.star_left').parent().hover(function(){
	$(this).children('.star_left').css({
		transform:"translateX(-8px)",
	})
	$(this).children('.star_right').css({
		transform:"translateX(8px)",
	})
},function(){
	$(this).children('.star_left').css({
		transform:"translateX(0px)",
	})
	$(this).children('.star_right').css({
		transform:"translateX(0px)",
	})
})
$('.star_left1').parent().hover(function(){
	$(this).children('.star_left1').css({
		transform:"translateX(-15px)",
	})
	$(this).children('.star_right1').css({
		transform:"translateX(15px)",
	})
},function(){
	$(this).children('.star_left1').css({
		transform:"translateX(0px)",
	})
	$(this).children('.star_right1').css({
		transform:"translateX(0px)",
	})
})
//蹦蹦跳跳动画
$('.min_box').hover(function(){
	$(this).children().first().css("position","relative").delay(600).animate({
		top:"-30px",
	},150).delay(100).animate({
		top:"0px",
	},80).animate({
		top:"-15px",
	},80).animate({
		top:"0px",
	},80)
},function(){
	$(this).children().first().stop(false,true)
})


//添加小手效果
$('.course').children().not(".last_item").css("cursor","pointer");
//点击城市切换图片
$('.school_nav').children().click(function(){
	$(this).css({
		background:"#4CC2FF",
		color:"#fff",
	}).siblings().css({
		background:"#fff",
		color:"#000",
	})
	$('.school ul').eq($(this).index()).show().siblings("ul").hide();
})
//城市图片自动播放
function auto(){
	$('.school ul').animate({
		marginLeft:"-290px"
	},5000).animate({
		marginLeft:"0px"
	},5000,auto)
}
auto();
//清除默认样式
$('.school ul').children().children("img").mousedown(function(){
	$(document).mousemove(function(){
		return false;
	})
})

$("#back").click(function(){
	$("#baidu").animate({
		"left":"100%",
	},500,function(){
		$(this).hide()
		$("#baidu_img").css("display","block")
	})
})
$("#baidu_img").click(function(){
	$("#baidu").css("display","block")
	$("#baidu").animate({
		"left":"0px",
	},1000)
	$("#baidu_img").css("display","none")
	
})










