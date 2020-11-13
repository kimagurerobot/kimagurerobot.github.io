// JavaScript Document
$(function(){
	
	  //ふわっと表示
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
		
		
		
		
		//フォームのアラート
		$(".alert").hide();
		$(".f_time").hide();
		$(".f_goods").hide();
		
		
		
		
			$('select[name="what"]').change(function() {
			

			if($('select[name="what"]').val() == "reserve") {
				$(".f_time").show();
			} else {
				$(".f_time").hide();
			}
			
			if($('select[name="what"]').val() == "order") {
				$(".f_goods").show();
			} else {
				$(".f_goods").hide();
			}
			
			
			
		});
		
/*		$('select[name="what"]').change(function() {
			
			var val = $(this).val();
			
			if($(val) == "reserve") {
				$(".f_time").show();
			}
		});
			*/
			
			
			
			
		$('input[name="submit"]').click(function(){
			
			var sendFlag = true;
		
			if(!$('input[name="name"]').val()){
				$($('input[name="name"]').parent().children(".alert")).show();
				sendFlag = false;
				} else {
					$($('input[name="name"]').parent().children(".alert")).hide();
				}
			if(!$('input[name="email"]').val()){
			$($('input[name="email"]').parent().children(".alert")).show();
			sendFlag = false;
			} else {
				$($('input[name="email"]').parent().children(".alert")).hide();
			}
			
		if(!$('input[name="tel"]').val()){
			$($('input[name="tel"]').parent().children(".alert")).show();
			sendFlag = false;
			} else {
				$($('input[name="tel"]').parent().children(".alert")).hide();
			}
		if($('select[name="what"]').val()==""){
			$($('select[name="what"]').parent().children(".alert")).show();
			sendFlag = false;
			} else {
			$($('select[name="what"]').parent().children(".alert")).hide();
			}
		if(!$("textarea").val()){
			$($("textarea").parent().children(".alert")).show();
			sendFlag = false;
			} else {
				$($("textarea").parent().children(".alert")).hide();
			}
		if(sendFlag == false) {
			return false;
		}
		
		
		
		
		
		
		
			
			});



});