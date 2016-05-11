$(function(){
     //全选
     $("#CheckedAll").click(function(){
			//所有checkbox跟着全选的checkbox走。
			$('[name=items]:checkbox').attr("checked", this.checked );
	 });
	 $('[name=items]:checkbox').click(function(){
				//定义一个临时变量，避免重复使用同一个选择器选择页面中的元素，提升程序效率。
				var $tmp=$('[name=items]:checkbox');
				//用filter方法筛选出选中的复选框。并直接给CheckedAll赋值。
				$('#CheckedAll').attr('checked',$tmp.length==$tmp.filter(':checked').length);

	 });
	 $(".jhd").click(function(){
	 alert("qqq");
	 });
	 $(".share_btn").hover(function(){
	 $(this).find(".share_bg").addClass("share_hover");
	 $(this).find(".share_sc").addClass("share_sc_hover");
	 },function(){
	 $(this).find(".share_bg").removeClass("share_hover");
	 $(this).find(".share_sc").removeClass("share_sc_hover");
	 }); 
});