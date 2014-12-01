var counter = 0;
$(document).ready(function() {

	$("a#gallery_button").on("click",function(){

		
			$("ul#gallery_selection").css({"display":"block"});
/*
		} else {
			$("ul#gallery_selection").css({"display":"none"});
		}
		counter = (counter + 1) % 2;
		console.log(counter);*/
	});
});
