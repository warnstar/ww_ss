$(document).ready(function() {
	
	//When page loads...
	//$(".tab_content_f1").hide(); //Hide all content
	//$("ul.tabs_f1 li:first").addClass("active").show(); //Activate first tab
	//$(".tab_content_f1:first").show(); //Show first tab content
	
	//On Click Event
	//$("ul.tabs_f1 li").hover(function() {
	
		//$("ul.tabs_f1 li").removeClass("active"); //Remove any "active" class
		//$(this).addClass("active"); //Add "active" class to selected tab
	//	$(".tab_content_f1").hide(); //Hide all tab content
	
		//var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		//$(activeTab).fadeIn(); //Fade in the active ID content
	//	return false;
	//},
	//function(){
	//});
	$(function(){
	var $tabc = $('.tab_content_f1');
	var $tabl = $('.tabs_f1');
	function swipe(jqobj,jqobj2){
		jqobj.hide();
		jqobj2.find('li').eq(0).addClass("active").show();
		jqobj.eq(0).show();
		jqobj2.find('li').hover(function(){
			$(this).addClass("active").show();
			$(this).removeClass("active");
			jqobj.hide();
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			return false;
		})
	}
	swipe($tabc,$tabl);	
})
});