// JavaScript Document

$(function(){
	
	/*ケーキのモーダル*/
	$("#gateau li a,#gateau_sec li a,#hole li a,#chiristmas li a").click(function(){
		var target_modal=$(this).attr("href");
		$( target_modal).fadeIn(700);
		$("body").append('<div id="bg">');
		$("#bg").click(function(){
			$(this).fadeOut(function(){
				$(this).remove();
				});
			$(target_modal).fadeOut();
			
			});
		return false;
		});
		
		
		if (window.matchMedia( "(max-width: 640px)" ).matches) {
			/*スマホのときのケーキボタンのスムーススクロール*/
			$(".res_cakebtn a").click(function(){
				var rescakeOffset=$($(this).attr("href")).offset().top;
				
				var headerHight=$("header").outerHeight();
				
				$("body,html").animate({scrollTop:rescakeOffset-headerHight},1800);
				
				return false;
				});
			
			}else{
		/*パソコンのとき*/
		/*ケーキのボタンのスムーススクロール*/
		$(".cake_btn a").click(function(){
			
	var cakeOffset=$($(this).attr("href")).offset().top;
			$("body,html").animate({scrollTop:cakeOffset-90},1300);
			
			return false;
			});
			
			}
		
		
		
		
	
	
	});