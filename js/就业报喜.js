
//轮播
var timer = null;
var num = 1;
function go(){
	timer = setInterval(function(){
		$("#ol_o").css({
			top:$("#ol_o").position().top - num
		})
		$("#ol_l").css({
			top:$("#ol_l").position().top - num
		})
		if (parseInt($("#ol_o").css("top")) <= -540) {
			$("#ol_o").css("top","540px");
		};
		if (parseInt($("#ol_l").css("top")) <= -540) {
			$("#ol_l").css("top","540px");
		};
	},20)
}

$("#con_n").mouseover(function(){
	clearInterval(timer)
})
$("#con_n").mouseout(function(){
	go()
})

// 图片旋转
window.z=0;
$(".pic").each(function(){
	$(this).css({
		transform:"rotate(" + ran(20,-20) + "deg)",
	})
})
for (var i = 0; i < $(".pic").length; i++) {
	$(".pic").click(function(){
		if ($(this).css("left") == "70px") {
			window.z++;
			$(this).css({
				zIndex:window.z,
				left:450,
				transform:"rotate(" + 0 + "deg)",	
			})
			console.log($(this).css("zIndex"))
			console.log(window.z)
		}else if ($(this).css("left") == "450px") {
			window.z++;
			$(this).css({
				zIndex:window.z,
				left:70,
				transform:"rotate(" + ran(20,-20) + "deg)",
			})
		};
	})
};


//随机函数
function ran(max,min){
	return parseInt(Math.random() * (max - min + 1) + min)
}


var data = {
	H5:{
		name:"HTML5",
		person:[
			{name:"张**",academic:"本科",professional:"市场营销",company:"北京**科技有限公司",salary:"10000元",post:"WEB前端开发"},
			{name:"王**",academic:"专科",professional:"船舶与海洋工程",company:"北京英**科技有限责任公司",salary:"12000元",post:"WEB前端开发工程师"},
			{name:"李**",academic:"本科",professional:"市场营销",company:"上海库*网络科技有限公司",salary:"18000元",post:"H5前端开发"},
			{name:"赵**",academic:"专科",professional:"工商管理",company:"意度**息科技有限公司",salary:"16000元",post:"JS前端研发工程师"},
			{name:"孙**",academic:"博士",professional:"电子信息工程",company:"上海赢端**科技有限公司",salary:"14000元",post:"WEB前端开发工程师"},
			{name:"钱**",academic:"本科",professional:"市场营销",company:"福玛**器人科技股份有限公司",salary:"10000元",post:"WEB前端开发"},
			{name:"周**",academic:"硕士",professional:"信息与计算科学",company:"挖趣**网络科技（北京）有限公司",salary:"9000元",post:"WEB前端开发工程师"},
			{name:"吴**",academic:"本科",professional:"广播电视编导",company:"云**",salary:"15000元",post:"H5前端开发"},
			{name:"杨**",academic:"专科",professional:"人力资源管理",company:"意度**息科技有限公司",salary:"10000元",post:"WEB前端开发工程师"},
			{name:"郑**",academic:"本科",professional:"食品科学与工程",company:"北京亲亲**",salary:"5000元",post:"WEB前端开发"},
			{name:"闪**",academic:"博士",professional:"市场营销",company:"中企**科技股份有限公司",salary:"6000元",post:"JS前端研发工程师"},
			{name:"杨**",academic:"专科",professional:"软件工程",company:"挖趣**网络科技（北京）有限公司",salary:"16000元",post:"H5前端开发"},
		]
	},
	ar:{
		name:"VR/AR/游戏",
		person:[
			{name:"南**",academic:"本科",professional:"市场营销",company:"北京**科技有限公司",salary:"15000元",post:"WEB前端开发"},
			{name:"冯**",academic:"专科",professional:"船舶与海洋工程",company:"北京英**科技有限责任公司",salary:"12000元",post:"WEB前端开发工程师"},
			{name:"陈**",academic:"本科",professional:"市场营销",company:"上海库*网络科技有限公司",salary:"15000元",post:"H5前端开发"},
			{name:"楚**",academic:"专科",professional:"工商管理",company:"意度**息科技有限公司",salary:"10000元",post:"JS前端研发工程师"},
			{name:"魏**",academic:"博士",professional:"电子信息工程",company:"上海赢端**科技有限公司",salary:"18000元",post:"WEB前端开发工程师"},
			{name:"蒋**",academic:"本科",professional:"市场营销",company:"福玛**器人科技股份有限公司",salary:"13000元",post:"WEB前端开发"},
			{name:"沈**",academic:"硕士",professional:"信息与计算科学",company:"挖趣**网络科技（北京）有限公司",salary:"10000元",post:"WEB前端开发工程师"},
			{name:"韩**",academic:"本科",professional:"广播电视编导",company:"云**",salary:"15000元",post:"H5前端开发"},
			{name:"杨**",academic:"专科",professional:"人力资源管理",company:"意度**息科技有限公司",salary:"17000元",post:"WEB前端开发工程师"},
			{name:"朱**",academic:"本科",professional:"食品科学与工程",company:"北京亲亲**",salary:"12500元",post:"WEB前端开发"},
			{name:"秦**",academic:"博士",professional:"市场营销",company:"中企**科技股份有限公司",salary:"16000元",post:"JS前端研发工程师"},
			{name:"许**",academic:"专科",professional:"软件工程",company:"挖趣**网络科技（北京）有限公司",salary:"136000元",post:"H5前端开发"},
		]
	},
	re:{
		name:"Web安全",
		person:[
			{name:"何**",academic:"本科",professional:"市场营销",company:"北京**科技有限公司",salary:"15000元",post:"WEB前端开发"},
			{name:"吕**",academic:"专科",professional:"船舶与海洋工程",company:"北京英**科技有限责任公司",salary:"12000元",post:"WEB前端开发工程师"},
			{name:"史**",academic:"本科",professional:"市场营销",company:"上海库*网络科技有限公司",salary:"15000元",post:"H5前端开发"},
			{name:"章**",academic:"专科",professional:"工商管理",company:"意度**息科技有限公司",salary:"10000元",post:"JS前端研发工程师"},
			{name:"孔**",academic:"博士",professional:"电子信息工程",company:"上海赢端**科技有限公司",salary:"18000元",post:"WEB前端开发工程师"},
			{name:"曹**",academic:"本科",professional:"市场营销",company:"福玛**器人科技股份有限公司",salary:"13000元",post:"WEB前端开发"},
			{name:"严**",academic:"硕士",professional:"信息与计算科学",company:"挖趣**网络科技（北京）有限公司",salary:"10000元",post:"WEB前端开发工程师"},
			{name:"靳**",academic:"本科",professional:"广播电视编导",company:"云**",salary:"15000元",post:"H5前端开发"},
			{name:"陶**",academic:"专科",professional:"人力资源管理",company:"意度**息科技有限公司",salary:"17000元",post:"WEB前端开发工程师"},
			{name:"姜**",academic:"本科",professional:"食品科学与工程",company:"北京亲亲**",salary:"12500元",post:"WEB前端开发"},
			{name:"谢**",academic:"博士",professional:"市场营销",company:"中企**科技股份有限公司",salary:"16000元",post:"JS前端研发工程师"},
			{name:"水**",academic:"专科",professional:"软件工程",company:"挖趣**网络科技（北京）有限公司",salary:"136000元",post:"H5前端开发"},
		]
	},
	yt:{
		name:"Android",
		person:[
			{name:"窦**",academic:"本科",professional:"市场营销",company:"北京**科技有限公司",salary:"15000元",post:"WEB前端开发"},
			{name:"云**",academic:"专科",professional:"船舶与海洋工程",company:"北京英**科技有限责任公司",salary:"12000元",post:"WEB前端开发工程师"},
			{name:"苏**",academic:"本科",professional:"市场营销",company:"上海库*网络科技有限公司",salary:"15000元",post:"H5前端开发"},
			{name:"潘**",academic:"专科",professional:"工商管理",company:"意度**息科技有限公司",salary:"10000元",post:"JS前端研发工程师"},
			{name:"葛**",academic:"博士",professional:"电子信息工程",company:"上海赢端**科技有限公司",salary:"18000元",post:"WEB前端开发工程师"},
			{name:"范**",academic:"本科",professional:"市场营销",company:"福玛**器人科技股份有限公司",salary:"13000元",post:"WEB前端开发"},
			{name:"彭**",academic:"硕士",professional:"信息与计算科学",company:"挖趣**网络科技（北京）有限公司",salary:"10000元",post:"WEB前端开发工程师"},
			{name:"鲁**",academic:"本科",professional:"广播电视编导",company:"云**",salary:"15000元",post:"H5前端开发"},
			{name:"韦**",academic:"专科",professional:"人力资源管理",company:"意度**息科技有限公司",salary:"17000元",post:"WEB前端开发工程师"},
			{name:"昌**",academic:"本科",professional:"食品科学与工程",company:"北京亲亲**",salary:"12500元",post:"WEB前端开发"},
			{name:"马**",academic:"博士",professional:"市场营销",company:"中企**科技股份有限公司",salary:"16000元",post:"JS前端研发工程师"},
			{name:"花**",academic:"专科",professional:"软件工程",company:"挖趣**网络科技（北京）有限公司",salary:"136000元",post:"H5前端开发"},
		]
	}
}


//点击事件
$('#nav li').click(function(){
	$('#nav li').css("color","#444444")
	$(this).css("color","red")
	$("#border").css("left",$(this).index()*124)
	var val = $(this).html()
	$("#ol_o li").remove()
	$("#ol_l li").remove()
	check(val)
})
function check(val){
	for(var x in data){
		if (val == data[x].name){
			var length = data[x].person.length;
			for (var i = 0; i < length; i++) {
				var li = "<li><p class='name'>"+data[x].person[i].name+"</p><p class='academic_a'>"+data[x].person[i].academic+"</p><p class='professional'>"+data[x].person[i].professional+"</p><p class='company'>"+data[x].person[i].company+"</p><p class='salary'>"+data[x].person[i].salary+"</p><p class='post'>"+data[x].person[i].post+"</p></li>"
				$("#ol_l").append(li)
				$("#ol_o").append(li)
			};
		};
	}
}
go()


//点击报名
$('.button').click(function(){
	console.log($('#text_t').val())
	if($('.text').eq(0).val() == false || $('#text_t').val() == false ||$('.text').eq(2).val() == false ||$('.text').eq(1).val() == false){
		$('<span class="input_span">请输入正确格式</span>').appendTo($('#input')).css({
			position:"absolute",
			top:110,
			left:210,
			color:"red",
			fontSize:14
		})
	}else{
		$('.input_span').remove();
	}
})