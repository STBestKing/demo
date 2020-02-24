var whdef = 110 / 1920;// 表示1920的设计图,使用100PX的默认值
var wH = window.innerHeight;// 当前窗口的高度
var wW = window.innerWidth;// 当前窗口的宽度
var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
$('html').css({ 'font-size': rem + "px",'overflow-x':'hidden' });
window.onload = function () {
   
	$(window).resize(function ()// 绑定到窗口的这个事件中
	{
	  var whdef = 110/1920;// 表示1920的设计图,使用100PX的默认值
	  var wH = window.innerHeight;// 当前窗口的高度
	  var wW = window.innerWidth;// 当前窗口的宽度
	  var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
	  $('html').css({ 'font-size': rem + "px", 'overflow-x': 'hidden' });
	});
	
	
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, 
	    effect: 'fade',
	    navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	    },
		pagination: {
		    el: '.swiper-pagination',
		},
		autoplay: {
		    delay: 3000,
		    stopOnLastSlide: false,
		    disableOnInteraction: true,
		}
	})
	
	//点击导航
	$('.hd-list a').click(function(){
		$(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
	})
	
	$('.baTxtbox input').click(function(){
		var urs=window.location.href;
		var ursplit=urs.split('/')[3];
		console.log(ursplit);
		if(ursplit){
			window.location = 'PC/tryon.html';
		}
		else{
			window.location = 'html/PC/tryon.html';
		}
		
	})
	function top0(as, bs) {
	    $('html,body').animate({ scrollTop: as }, bs);
	}
    /**
* 发送验证码
*/
	$(".send").click(function () {

	    if (countdown != 120) return;

	    var $tel = $("#tel");
	    if (!$tel.val()) {
	        $("#valid_tel").css("color", "red").text("请输入手机号码");
	        $tel.focus();
	        return;
	    }
	    var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
	    if (!reg.test($tel.val())) {
	        $("#valid_tel").css("color", "red").text("手机号格式错误");
	        $tel.focus();
	        return;
	    }
	    $("#valid_tel").text("");
	    settime();
	    $.get("/plugins/ApplyTrial/ajax.ashx?action=sendsms", { tel: $tel.val() }, function (data) {
	        if (data) {
	            var jsondata = JSON.parse(data);
	            if (jsondata && jsondata.Status === true) {
	                var code = jsondata.Result.Contents[0];
	                var moblie = jsondata.Result.moblie;
	                console.log(code);
	                $(".applyFor").data("code", code);
	                $(".applyFor").data("moblie", moblie);
	            }
	        }
	    });
	});
    /**
    * 提交申请
    */
	var moblie
	$("#sendBtn").click(function () {
	    var code = $(".applyFor").data("code");
	    moblie = $(".applyFor").data("moblie");
	    var inputcode = $("#smscode").val();
	    if (code != inputcode) {
	        $("#valid_smscode").css("color", "red").text("验证码输入错误");
	        $("#smscode").focus();
	        return;
	    }
	    $("#valid_smscode").text("");
	    $('.zhezhao,.tryform').show();
	    top0('100px', 500)
	});
    //提交
	var productname
	var arr1 = [];
	var modulelist = '';
	$('.btnbox input').click(function () {
	    var companyname = $('#company').val();
	    var username = $('#youname').val();
	    var requirement = $('.txtarea textarea').val();
	    productname = $(".inneed input[name='radio']:checked").next().text();
	    moblie = $(".applyFor").data("moblie");
	    var checkid = $(".inneed input[name='radio']:checked").attr('id')
	    if (checkid == 'quanyu') {
	        $(".modelbox.quanyu  input:checkbox[name='message']:checked").each(function () {
	            arr1.push($(this).val())
	        })
	        arr1.map(function (item) {
	            modulelist += item + ',';

	        });
	    }
	    else {
	        $(" .modelbox.qijian input:checkbox[name='message']:checked").each(function () {
	            arr1.push($(this).val())
	        })
	        arr1.map(function (item) {
	            modulelist += item + ',';

	        });
	    }
	       
	    if (companyname == '' || username == '' || productname == '' || requirement == '' || arr1 == '') {
	        $('.zhezhao2,.popsub').show()
	      
	    } else {
	        $.ajax({
	            type: 'post',
	            url: '/plugins/ApplyTrial/ajax.ashx?action=applytrial',
	            data: { 'mobile': moblie, 'companyname': companyname, 'username': username, 'productname': productname, 'modulelist': '"' + modulelist + '"', 'requirement': '"' + requirement + '"' },
	            success: function (res) {
	                console.log(res)
	                $('.tryform').hide();
	                $('.pop').show();
	            },
	            error: function (err) {
	                console.log(err)
	            }
	        })
	    }

	})
	$('#popsurebtn').click(function () {
	    $('.zhezhao2,.popsub,.pop').hide()
	   
	})
	var countdown = 120;
	function settime() {
	    var _send = $(".send");
	    if (countdown <= 0) {
	        _send.text("获取验证码");
	        countdown = 120;
	        return false;
	    } else {
	        _send.text("重新发送(" + countdown + ")");
	        countdown--;
	    }
	    setTimeout(function () {
	        settime();
	    }, 1000);
	}
	

	$('.off').click(function(){
		$('.tryform').hide();
		$('.pop').show();
	})
	
	$('#zhihui').click(function(){
		$('.quanyu').hide();
		$('.qijian').show();
	
	})
	$('#quanyu').click(function(){
		$('.qijian').hide();
		$('.quanyu').show();
	
	})
	
	$('.know input').click(function(){
	    $('.pop,.zhezhao').hide(500);
	    $('#tel').val('');
	    $('#smscode').val('');
	    $(".send").text("获取验证码");
	    countdown = 0;
	    top0('0px', 500)
	    window.location.reload()
	  
	       
	  
	})
	
	
}
