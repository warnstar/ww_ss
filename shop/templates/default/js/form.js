
//<![CDATA[
$(function(){
		//如果是必填的，则加红星标识.
		//$("form :input.required").each(function(){
		//	var $required = $("<strong class='high'> *</strong>"); //创建元素
		//	$(this).parent().append($required); //然后将它追加到文档中
		//});
         //文本框失去焦点后
	    $('form :input').blur(function(){
			 var $parent = $(this).parent();
			 $parent.find(".formtips").remove();
			 //验证用户名
			 if( $(this).is('#username') ){
					if( this.value=="" || this.value.length < 6 ){
					    var errorMsg = '6-20位字符，建议由字母，数字和符合两种以上组合.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
					}else{
					    var okMsg = '已输入.';
					    $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
					}
			 }
			 //验证密码
			 if( $(this).is('#p1') ){
					if( this.value=="" || this.value.length < 4 ){
					    var errorMsg = '4-20位字符，支持汉字字母，数字及”-“，”—“以上组合.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
					}else{
					    var okMsg = '已输入.';
					    $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
					}
			 }
			 //验证密码
			 if( $(this).is('#p2') ){
					if( this.value=="" || this.value.length < 4 ){
					    var errorMsg = '请再次输入密码.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
					}else{
						var pwd1=document.getElementById("p1").value;
                        var pwd2=document.getElementById("p2").value;
					    var okMsg = '两次密码输入不一致.';
						if(pwd1!=pwd2){
					    $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');}
					}
			 }
			 //验证邮件
			 if( $(this).is('#email') ){
				if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                      var errorMsg = '请输入正确的E-Mail地址.';
					  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
				}else{
                      var okMsg = '输入正确.';
					  $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
				}
			 }
			  //验证用户名
			 if( $(this).is('#phone') ){
					if( this.value=="" || ( this.value!="" && !/^1[3,5,8]\d{9}$/.test(this.value) ) ){   
					    var errorMsg = '请输入正确的手机号.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
					}else{
					    var okMsg = '输入正确.';
					    $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
					}
			 }
		}).keyup(function(){
		   $(this).triggerHandler("blur");
		}).focus(function(){
	  	   $(this).triggerHandler("blur");
		});//end blur

		
		//提交，最终验证。
		 $('#send').click(function(){
				$("form :input.required").trigger('blur');
				var numError = $('form .onError').length;
				if(numError){
					return false;
				} 
				alert("注册成功,密码已发到你的邮箱,请查收.");
		 });

		//重置
		 $('#res').click(function(){
				$(".formtips").remove(); 
		 });
})
//]]>
