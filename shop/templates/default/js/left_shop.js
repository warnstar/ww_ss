
//延迟选项卡
$(function(){
	var index = 0;
	var timer = null;
	var $div_li =$("div.tab_menu ul li");
		$div_li.hover(function(){
		//用that这个变量来引用当前滑过的li
		var that=this;
		//如果存在准备执行的定时器，立即清除，只有当前停留时间大于500ms时才开始执行
		if (timer) {
			clearTimeout(timer);
			time=null;
		}
		//延迟500ms执行
		timer=window.setTimeout(function(){
		$(that).addClass("selected")            //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的高亮
            var index =  $div_li.index(that);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
					.eq(index).show()   //显示 <li>元素对应的<div>元素
					.siblings().hide();
					},500)
		});
});
