// JavaScript Document
$(function(){
	
	/*totopのスムーススクロール*/
	$(".totop a").click(function(){
		$("body,html").animate({scrollTop:0},2000);
		return false;
	});
	
	/*g_navのスムーススクロール*/
	
	
	if (window.matchMedia( "(max-width: 640px)" ).matches) {
		/*スマホの時用*/
		$("header ul li a,footer ul li a").click(function(){
		var targetOffset=$($(this).attr("href")).offset().top;
		$("body,html").animate({scrollTop:targetOffset-100},1800);
		return false;
		
	});
	}else{
		/*パソコンの時用*/
		$("header ul li a,footer ul li a").click(function(){
		var targetOffset=$($(this).attr("href")).offset().top;
		$("body,html").animate({scrollTop:targetOffset-82.2},1800);
		return false;
		
	});
	}
	
	
	
	
});