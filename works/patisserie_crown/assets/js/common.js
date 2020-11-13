// JavaScript Document

$(function(){
	
	/*totopのスムーススクロール*/
	/*スマホ・パソコン共通*/
	$(".totop a").click(function(){
		
		$("html,body").animate({scrollTop:0},1000);
		
		return false;
		});
	
	
	
	
		
		
		if (window.matchMedia( "(max-width: 640px)" ).matches) {
			/*スマホの時用*/
			/*ハンバーガーメニューの開閉*/
		$(".humberger_btn").click(function(){
			$(".res_nav").slideToggle(500);
			});

		}else{
			/*パソコンの時用*/
			/*ヘッダー固定*/
			var navPos=$("nav").offset().top;
	
	$(window).scroll(function(){
		if($(window).scrollTop()>navPos){
			$("nav").css("position","fixed").css("transform","translateX(-50%)");
			}else{
				$("nav").css("position","static").css("transform","translateX(0)");
				}
		});
		
		/*ふわっと表示させる*/
		
		$(".fadein").css("transform","translateY(100px)").css("opacity",0);
		/*transformはanimateメソッドが使えないようなので、transitionで制御する*/
		$(".fadein").css("transition","transform .8s");
		
		
		$(window).scroll(function(){
			
			$(".fadein").each(function(){
		
		var fadeinOffset=$(this).offset().top;
		
		var windowScroll=$(window).scrollTop();
		
		var windowHight=$(window).height();		
			if(windowScroll>fadeinOffset-windowHight+200){
			
			
			$(this).animate({"opacity":1},800);
			$(this).css({"transform":"translateY(0)"});
			
			}	
				
				});
			
			});
			
			
		
		
		
		
			}
	
	
	
	});