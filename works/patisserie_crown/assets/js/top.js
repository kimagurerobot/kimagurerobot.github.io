// JavaScript Document

$(function(){
	
	
		
	
	var count=$("#slide li").length;
	
	var current=1;
	
	var next=2;
	
	var interval=4000;
	
	var duration=1000;
	
	var timer;
	
	
	
	$("#slide li:not(:first-child)").hide();
	
	/*パソコンの時だけスライドタイマー動かす*/
	if (window.matchMedia( "(max-width: 640px)" ).matches) {
		
		} else{
	timer=setInterval(slideTimer,interval);
	
	
	/*スライドタイマー関数*/
	function slideTimer(){
		
		$("#slide li:nth-child("+current+")").fadeOut(duration);
		
		$("#slide li:nth-child("+next+")").fadeIn(duration);
		
		current=next;
		
		next=++next;
		
		if(next > count){
			next=1;
			}
			
			$("#button li").removeClass("target");
			
			$("#button li:nth-child("+current+")").addClass("target");
		
		}
		
		
		/*ぼたんをクリックしたときの処理*/
		$("#button li a").click(function(){
			next=$(this).html();
			
			clearInterval(timer);
			timer=setInterval(slideTimer,interval);
			
			slideTimer();
			
			return false;
			});
			
			
			
	
			
			
			
		
		}
	
	
	
	
	});