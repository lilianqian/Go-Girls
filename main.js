
$(document).ready(function() {
	var counter = 0;
	$("a#gallery_button").on("click",function(){

		if (counter % 2 === 0){		
			$("ul#gallery_selection").css({"display":"block"});
		
		} else {
			$("ul#gallery_selection").css({"display":"none"});
		}

		counter = counter+1;
		
	});
});
