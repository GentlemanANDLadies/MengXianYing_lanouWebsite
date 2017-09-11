//点击切换选项卡
$('.tab li').click(function(){
	$(this).addClass("on").siblings().removeClass('on');
	$('.same').hide();
	$('.same').eq($(this).index()).show();
})

//点击报名
$('.button').click(function(){
	console.log($('#text_t').val())
	if($('.text').val()==false||$('#text_t').val()==false){
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
