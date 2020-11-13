// JavaScript Document

 $(function(){

$(document).ready(function () {
    $(".totop").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.totop').fadeIn();
            } else {
                $('.totop').fadeOut();
            }
        });

        $('.totop a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});





	 
	 /*ここから長野*/
	

	 
	 
	 if (window.matchMedia( "(max-width: 640px)" ).matches){
		 
		
		 
		 
		 }else{
			 $(".modal_btn a").click(function(){
		$("body").append('<div id="bg">');
		$("bg").hide();
		$("bg").fadeIn();
		
		var target=$(this).data("target");
			$("#modal").fadeIn(1000);
				$("#modal li").not('#'+target).hide();
			$("#bg").click(function(){
		
				$(this).fadeOut(function(){
					$(this).remove();
				});
				$("#modal").fadeOut(function(){
					$("#modal li").not('#'+target).show();
				});
				
			});
		
		 return false;
	 });
			 
			 }
	 
	 
	 
});

