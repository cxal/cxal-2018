$(function(){
	//分块隐藏
	$('#zt div:not("#section2")').hide();
	$('#liebiao >ul >li > a').on('click',function(){
		$('#zt div').hide();
		$($(this).attr('href')).show();
		$('.current').removeClass('current');
		$(this).addClass('current');
		return false;
	});
	//放大图片
	$('#yc6 >ul >li >a').on('click',function(){
		$('#yc6').append('<div id="bg"></div>');
		$('#yc6').append('<div id="photo"></div>');
		$('#bg').hide();
		$('#photo').hide();
		$('#photo').html('<img>');
		$('#photo img').attr('src',$(this).attr('href'));
		$('#bg').fadeIn();
		$('#photo').fadeIn();
		$('#bg').on('click',function(){
			$(this).fadeOut(300,function(){
				$(this).remove();
			});
			$('#photo').fadeOut(300,function(){
				$(this).remove();
			});
		});
		return false;
	});
	//胸，隐藏
	$('#yc1').hide();
	$('#xiong').on('click',function(){
		$('#yc1').slideToggle(2000);
	});
	//背，隐藏
	$('#yc2').hide();
	$('#bei').on('click',function(){
		$('#yc2').slideToggle(2000);
	});
	//肩，隐藏
	$('#yc3').hide();
	$('#jian').on('click',function(){
		$('#yc3').slideToggle(2000);
	});
	//手臂，隐藏
	$('#yc4').hide();
	$('#shou').on('click',function(){
		$('#yc4').slideToggle(2000);
	});
	//腿，隐藏
	$('#yc5').hide();
	$('#tui').on('click',function(){
		$('#yc5').slideToggle(2000);
	});
	//休息，隐藏
	$('#yc6').hide();
	$('#xiu').on('click',function(){
		$('#yc6').slideToggle(2000);
	});
	// li要素内にマウスが入った場合
	$('#aa li,#bb li,#cc li,#dd li,#ee li').on('mouseenter',function(){
		// キャプション部分の追加
		$(this).append(
			'<div><p>' +
			$(this).children('img').attr('alt') +
			'</p></div>'
		);

		// キャプション部分の表示：フェードイン
		$(this).children('div').stop().fadeIn(300);

		// キャプションのテキスト位置：10pxから0pxへ移動
		$(this).children('div').children('p')
			.stop()
			.animate({'top' : 0}, 300);
	})
    // li要素からマウスが離れた場合
	.on('mouseleave', function(){

		// キャプション部分の非表示：フェードアウト
		$(this).children('div').stop().fadeOut(300);

		// キャプションのテキスト位置：0pxから10pxへ移動
		$(this).children('div').children('p')
			.stop().animate({'top':'10px'}, 300, function(){
			$(this).parent('div').remove();
		});
	});
	
});