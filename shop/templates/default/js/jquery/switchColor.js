/*衣服颜色切换*/
$(function(){
	$(".color_change ul li img").click(function(){   
 //当前选择颜色图片的src属性，如：<li><img src="images/pro_img/blue.jpg" alt="蓝白" /></li>  	
		  var imgSrc = $(this).attr("src"); //"images/pro_img/blue.jpg"  
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_one_small"+ unit;//结果："images/pro_img/blue_one_small.jpg"
		  var imgSrc_big = imgSrc + "_one_big"+ unit;//结果："images/pro_img/blue_one_big.jpg" 
		  //同时给两个属性赋值  
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
		  //当前选择颜色图片的alt属性的值："蓝色"
		  var alt = $(this).attr("alt");
		  $(".color_change strong").text(alt);
		  //"images/pro_img/blue.html"
		  var url = imgSrc+".html";
		  //先清空，再重新加载新的图片  
		  $(".pro_detail_left ul.imgList").empty().load(url);	
	});
});