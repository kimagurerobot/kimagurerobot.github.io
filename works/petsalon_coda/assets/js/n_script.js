// JavaScript Document

$(function(){
	
	var count=$("#slide>ul li").length;
	
	var current=1;
	
	var next=2;
	
	var interval=3000;
	
	var duration=1000;
	
	var timer;
	
	
	$("#slide>ul li:not(:first-child)").hide();
	
	
			
			
var navPos=$("#nav").offset().top;

			$("#scroll_nav").hide();
			
			
	$(window).resize(function(){
		location.reload();
		});
			
	if (window.matchMedia( "(max-width: 640px)" ).matches) {
/* ウィンドウサイズが 640px以下の場合のコードをここに */

$(window).scroll(function(){
	if($(window).scrollTop()>navPos){
		$("#nav").css("position","fixed")
		}else{
			$("#nav").css("position","static")
			}
	});
	/*スライドショーの高さ*/
	var height=$("#slide li").height();
	$("#slide").css("height",height);
	/*オーダーメイド*/
	var orderHight=$("#order_items li img").height();
	var orderpHight=$("#order_items li .order_text").height();
	$("#order_items li").css("height",orderHight+orderpHight);
	
	
} else {
/* ウィンドウサイズが 640px以上の場合のコードをここに */
$(window).scroll(function(){
				if($(window).scrollTop()>navPos){
					$("#scroll_nav").show();
					}else{
						$("#scroll_nav").hide();
						}
				});
				
		timer=setInterval(slideTimer,interval);
	
	function slideTimer(){
		$("#slide>ul li:nth-child("+current+")").fadeOut(duration);
		
		$("#slide>ul li:nth-child("+next+")").fadeIn(duration);
		
		
		current=next;
		
		next=++next;
		
		if(next>count){
			next=1;
			}
			
			$("#button li a").removeClass("target");
			
			$("#button li:nth-child("+current+") a").addClass("target");
		}
		
		$("#button li a").click(function(){
			
			next=$(this).html();
			
			clearInterval(timer);
			
			timer=setInterval(slideTimer,interval);
			
			slideTimer();
			
			return false;
			});		
				
}



			
	});