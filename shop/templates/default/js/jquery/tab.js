/*Tab 选项卡 标签*/
$(function(){
	    var $div_li =$("div.tab_menu ul li");
	    $div_li.click(function(){
			$(this).addClass("selected")            //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
					.eq(index).show()   //显示 <li>元素对应的<div>元素
					.siblings().hide(); //隐藏其他几个同辈的<div>元素
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})
		
})
//商品评价列表 
$(function(){  
    var $div_li =$("div.tab_tup ul li");
	    $div_li.click(function(){
			$(this).addClass("selected")            //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_big > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
					.eq(index).show()   //显示 <li>元素对应的<div>元素
					.siblings().hide(); //隐藏其他几个同辈的<div>元素
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})
});  
//购物车加减号切换
$(function(){  
    var t = $("#text_box");  
    $("#add").click(function(){       
        t.val(parseInt(t.val())+1)  
        setTotal();  
    })  
    $("#min").click(function(){  
        t.val(parseInt(t.val())-1)  
        if(parseInt(t.val())<0){   
            t.val(0);   
        }   
        setTotal();  
    })  
    function setTotal(){  
    //toFixed(2) 表示保留两位小数  
        $("#total").html((parseInt(t.val())*88).toFixed(2));  
    }  
    setTotal(); 
});  