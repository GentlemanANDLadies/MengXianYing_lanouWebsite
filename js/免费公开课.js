var right = document.getElementById('right');
right.style.height = document.documentElement.clientHeight + "px";
var timers = null;
var t = 0;

//轮播图
function go(){
	timers = setInterval(function(){
		t++;
		if (t > 3) {
			t = 0
		};
		$(".on").css("background","none");
		$(".on").eq(t).css("background","#ccc");
		$("#carousel ul").css("marginLeft",-t * 100 + "%")
	},3000)
	$(".on").click(function(){
		clearInterval(timers)
		i=$(this).index();
		$(".on").css("background","none");
		$(this).css("background","#ccc");
		$("#carousel ul").css("marginLeft",-i*100+"%");
		t = i;
		go()
	})
}
go()

//名师动画
$(".row_l").mouseover(function(){
	$(this).children().children(".text_e").css("display","none");
	// $(".btns").css("display","block")
	$(this).children().children(".btns").css("display","block")
})
$(".row_l").mouseout(function(){
	$(this).children().children(".text_e").css("display","block");
	// $(".btns").css("display","none")
	$(this).children().children(".btns").css("display","none")
})

setInterval(function(){
	var W = $(".pic").width()
	$(".btns_1").css({
		width:W
	})
	var H = parseInt($(".menu_1sss .pic").css("height"))-20
	$(".btns_1").css({
		height:H
	})
},1000)
//热门班级动画
$(".menu_2sss").mouseenter(function(){
	$(this).children(".btns_1").css("display","block");
	$(this).children().children(".btns_2").animate({marginTop:68},300,"linear",function(){
	})
})
$(".menu_2sss").mouseleave(function(){
	$(this).children().children(".btns_2").animate({marginTop:165},200,"linear",function(){
	}).stop(false,true)
	$(this).children(".btns_1").css("display","none");
})

$("#ture").click(function(){
	$("#false").css("display","block")
	$("#false li").mouseover(function(){
		$(this).css({
			background:"lightgreen",
		})
		$(this).children("a").css("color","white");
	})
	$("#false li").mouseout(function(){
		$(this).css({
			background:"white",
		})
		$(this).children("a").css("color","rgb(131,131,131)");
	})
		event.cancelBubble = true;
})
$(document).click(function(){
	$("#false").css("display","none")	
})


//选项卡效果
$(".li_1").click(function(){
	$(".li_1 a").css({
		background:"white",
		color:"black",
	})
	$(".li_1 a").eq($(this).index()).css({
		background:"lightblue",
		color:"white"
	})
	$("#ul_l a").css({
		background:"",
	})

	$(".menu_11").css({display:"none"})
	$(".menu_11").eq($(this).index()).css({display:"block"})

})

$("#false li").click(function(){
	$(".menu_11").css({display:"none"})
	$(".menu_11").eq($(this).index()).css({display:"block"})
})

$("#ul_l a").click(function(){
	$("#ul_l a").css({
		background:"",
	})
	$("#ul_l a").eq($(this).index()).css({
		background:"lightgreen",
	})
	$(".menu_11").css({display:"none"})
	$(".menu_11").eq($(this).index()+1).css({display:"block"})
})


//left动画
$("#top #caidan img").click(function(){
	$("#box").css("left","250px")
	$("#left").css("left","0px")
	event.cancelBubble = true;
})
$("#box").click(function(){
	$("#box").css("left","0px")
	$("#left").css("left","-250px")
})