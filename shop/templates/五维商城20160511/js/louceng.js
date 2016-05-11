$(document).ready(function() {

//When page loads...
	$(".tab_content_d").hide(); //Hide all content
	$("ul.tab_ds li:first").addClass("active").show(); //Activate first tab
	$(".tab_content_d:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tab_ds li").click(function() {
	
		$("ul.tab_ds li").removeClass("active"); //Remove any "active" class
		//$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content_d").hide(); //Hide all tab content
	
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});