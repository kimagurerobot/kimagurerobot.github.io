// JavaScript Document

$(function(){
	/*フォームのバリデーション*/
	$("#submit_btn").click(function(){
		
		var sendFlag=true;
		
		/*名前のセクション*/
		if(!$("#name").val()){
			$("#name_section .alert").show();
			sendFlag=false;
			}else{
				$("#name_section .alert").hide();
				}
				
				/*メールのセクション*/
				if(!$("#email").val()){
					$("#mail_section .alert").show();
					sendFlag=false;
					}else{
						$("#mail_section .alert").hide();
						}
			/*電話のセクション*/			
		if(!$("#tel").val()){
			$("#tel_section .alert").show();
			sendFlag=false;
			}else{
				$("#tel_section .alert").hide();
				}
				
		/*ラジオボタンのセクション*/
		var radiobtn =$('input[name="type"]:checked').length;
		
		if(radiobtn==0){
			$("#type_section .alert").show();
			sendFlag=false;
			}else{
				$("#type_section .alert").hide();
				}
				
				/*お問い合わせ内容のセクション*/
				if(!$("#textarea").val()){
					$("#content_section .alert").show();
					sendFlag=false;
					}else{
						$("#content_section .alert").hide();
						}
						
						if(sendFlag==false){
							return false;
							}					
				
		
		});
	
	
	
	
	
	});