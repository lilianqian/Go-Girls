
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

$(document).ready(function() {
	var counter = 0;

    $('.circle').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "1px solid #bbb"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});



$(document).ready(function() {
	$('a>.like').on({
	    'click': function(e) {
	        var src = ($(this).attr('src') === 'img/like.png')
	            ? 'img/liked.png'
	            : 'img/like.png';
	        $(this).attr('src', src);
	        e.preventDefault();
	    }
	});
});


