$(document).ready(function(){
	$('.headAction li').hover( 
		function(){
			$(this).find('.dropMenu').stop().slideDown();
		},function(){
			$(this).find('.dropMenu').stop().slideUp();
		}
	);
//核心业务	
	$(".serBox").hover(function() {
		$(this).children().stop(false, true);
		$(this).children(".pic1").animate({
			right: -353
		}, 400);
		$(this).children(".pic2").animate({
			left: 0
		}, 400);
		$(this).children(".txt1").fadeTo(200, 0.25);
		$(this).children(".txt1").animate({
			left: -353
		}, 400);
		$(this).children(".txt2").fadeTo(200, 1);
		$(this).children(".txt2").animate({
			right: 0
		}, 400);
		$(this).children(".txt01").fadeTo(200, 0.25);
		$(this).children(".txt01").animate({
			left: -353
		}, 400);
		$(this).children(".txt02").fadeTo(200, 1);
		$(this).children(".txt02").animate({
			right: 0
		}, 400)
	}, function() {
		$(this).children().stop(false, true);
		$(this).children(".pic1").animate({
			right: 0
		}, 400);
		$(this).children(".pic2").animate({
			left: -353
		}, 400);
		$(this).children(".txt1").fadeTo(200, 1);
		$(this).children(".txt1").animate({
			left: 0
		}, 400);
		$(this).children(".txt2").fadeTo(200, 0.25);
		$(this).children(".txt2").animate({
			right: -353
		}, 400);
		$(this).children(".txt01").fadeTo(200, 1);
		$(this).children(".txt01").animate({
			left: 0
		}, 400);
		$(this).children(".txt02").fadeTo(200, 0.25);
		$(this).children(".txt02").animate({
			right: -353
		}, 400)
	});
/*08-26修改*/
	$(function(){
		         /* 二级导航栏调整*/
				$('.nav-contain ul li ').click(function(){
					var i=$(this).index();
					$('.nav-contain ul li ').find('a').removeClass("curent");
					
					$('.nav-contain ul li ').eq(i).find('a').addClass("curent");
					})
					/* 关于我们二级导航栏调整*/
					$('.icon ul .li02').click(function(){
					   $('.icon ul .li01').css("background-position","-0 -95px");
					   $('.icon ul .li05').css("background-position","-632px -95px");
					   $(this).css("background-position","-158px 0");
						})
				   $('.icon ul .li05').click(function(){
					     $('.icon ul .li01').css("background-position","-0 -95px");
						 $('.icon ul .li02').css("background-position"," -158px -95px");
						 $(this).css("background-position","-632px 0");
						})
						
				/*首页banner图自适应调整*/
				/*$(function(){
				var wimg=$('.fullSlide  ul li img').width();
				var w=$(document).width();
				if(w<=1366){ 
				$('.fullSlide  ul').height(300);
				}
				else if(w<=1440){ 
				$('.fullSlide  ul').height(318);
				}
				else if(w<=1920){ 
				$('.fullSlide  ul').height(425);
				}
			  });*/
			  $(function(){
				  var himg=$('.fullSlide .bd  ul li  img').height();
				  $('.fullSlide  ul').height(himg);
				 
				
				 })
			  /* 客户服务二级导航栏调整*/
				function diaoyong(clicked ,site){
					   $(clicked).click(function(){
							$(' .service-nav ul .service-li1').find('a').css("background-position","-139px 0");
							$(' .service-nav ul .service-li2').find('a').css("background-position","-420px 0");
							$(' .service-nav ul .service-li3').find('a').css("background-position","-702px 0");
							$(' .service-nav ul .service-li4').find('a').css("background-position","-982px 0");
							$(' .service-nav ul .service-li5').find('a').css("background-position","-1264px 0");
							$(' .service-nav ul .service-li6').find('a').css("background-position","-1545px 0");
							$(' .service-nav ul .service-li7').find('a').css("background-position","-1826px 0");
							$(' .service-nav ul .service-li8').find('a').css("background-position","-2106px 0");
						 $(this).find('a').css("background-position",site);
					  })
					}	
					
					diaoyong(' .service-nav ul .service-li1','0 0');
					diaoyong(' .service-nav ul .service-li2','-281px 0');
					diaoyong(' .service-nav ul .service-li3','-562px 0');
					diaoyong(' .service-nav ul .service-li4','-842px 0');
					diaoyong(' .service-nav ul .service-li5','-1122px 0');
					diaoyong(' .service-nav ul .service-li6','-1404px 0');
					diaoyong(' .service-nav ul .service-li7','-1685px 0');
					diaoyong(' .service-nav ul .service-li8','-1965px 0');

				});
				
	function setMinWidth(width) {
       var bWidth = ($(window).width() <= width) ? width : '100%';
         $('body').eq(0).width(bWidth);
	     $('iframe').find('body').width(807);
         // 窗口放大缩小，设置页面宽度
         $(window).resize(function () {
           var bWidth = ($(window).width() <= width) ? width : '100%';
           $('body').eq(0).width(bWidth);
        });
	 }

 $(function () {
     setMinWidth(1366);
	 $('iframe').find('body').width(807);
	
 });
				
				
				
	
});

