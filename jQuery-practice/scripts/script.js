$(function(){
	//�ֿ�����
	$('#zt div:not("#section2")').hide();
	$('#liebiao >ul >li > a').on('click',function(){
		$('#zt div').hide();
		$($(this).attr('href')).show();
		$('.current').removeClass('current');
		$(this).addClass('current');
		return false;
	});
	//�Ŵ�ͼƬ
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
	//�أ�����
	$('#yc1').hide();
	$('#xiong').on('click',function(){
		$('#yc1').slideToggle(2000);
	});
	//��������
	$('#yc2').hide();
	$('#bei').on('click',function(){
		$('#yc2').slideToggle(2000);
	});
	//�磬����
	$('#yc3').hide();
	$('#jian').on('click',function(){
		$('#yc3').slideToggle(2000);
	});
	//�ֱۣ�����
	$('#yc4').hide();
	$('#shou').on('click',function(){
		$('#yc4').slideToggle(2000);
	});
	//�ȣ�����
	$('#yc5').hide();
	$('#tui').on('click',function(){
		$('#yc5').slideToggle(2000);
	});
	//��Ϣ������
	$('#yc6').hide();
	$('#xiu').on('click',function(){
		$('#yc6').slideToggle(2000);
	});
	// liҪ���ڤ˥ޥ�������ä�����
	$('#aa li,#bb li,#cc li,#dd li,#ee li').on('mouseenter',function(){
		// ����ץ���󲿷֤�׷��
		$(this).append(
			'<div><p>' +
			$(this).children('img').attr('alt') +
			'</p></div>'
		);

		// ����ץ���󲿷֤α�ʾ���ե��`�ɥ���
		$(this).children('div').stop().fadeIn(300);

		// ����ץ����Υƥ�����λ�ã�10px����0px���Ƅ�
		$(this).children('div').children('p')
			.stop()
			.animate({'top' : 0}, 300);
	})
    // liҪ�ؤ���ޥ������x�줿����
	.on('mouseleave', function(){

		// ����ץ���󲿷֤ηǱ�ʾ���ե��`�ɥ�����
		$(this).children('div').stop().fadeOut(300);

		// ����ץ����Υƥ�����λ�ã�0px����10px���Ƅ�
		$(this).children('div').children('p')
			.stop().animate({'top':'10px'}, 300, function(){
			$(this).parent('div').remove();
		});
	});
	
});