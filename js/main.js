
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

	$("a.mainimg-link").on("click", function(){
		window.location ="#";
		window.scrollTo(0, 0);
		$("div.main-page").css("display","none");
		makeSingleDesignPage(this);
	});

});


function makeSingleDesignPage(obj) {
	$("section.single-design-page").remove();
	var imgUrl = $(obj).find("img").attr("src");
	var nextImgUrl = $(obj).parent().next("div.show").find("img.mainimg").attr("src");
	var prevImgUrl = $(obj).parent().prev("div.show").find("img.mainimg").attr("src");
	console.log(nextImgUrl);

	nextImgUrl = (nextImgUrl == undefined) ? "img/livingroom/lv2.jpg" : nextImgUrl;

	prevImgUrl = (prevImgUrl == undefined) ? "img/livingroom/lv1.jpg" : prevImgUrl;


	var name = imgUrl.substring(imgUrl.indexOf("/")+1,imgUrl.indexOf("."));

	var singleSection = $("<section class='single-design-page'></section>");

	var header = $('<div id="single"> \
		<img class="single_home" src="img/Btn_exit.png" width=20px height=auto onclick="closeSingelPage()">\
         <p class="clear"></p></div>');
	var singleCol = $('<div id="single_column">'+
   
                '<img class="single_mainimg" src="'+ imgUrl+'" />'+
            '</div>');
	header.append(singleCol);
	

	var singleColumnStr = '<div id="single_column_R">\
                   <div id="single_column_R_wrapper">\
                   <p><img class="numlike" src="img/liked.png" />123</p>\
                   <p>Dear Lillie Fall Home Tour - I love this peaceful\
        bedroom.</p>\
                   <ul class="tag">\
                   <h3>Tags</h3>\
                   <li>livingroom</li>\
                   <li>modern</li>\
                   <li>grey</li>\
                   <li>black</li>\
                   <li>white</li>\
                   <li>products</li>\
                   </ul>\
                   <h2>Related posts</h2>\
                     <div>\
                       <div class="single_imgwrapper"> \
                         <a href="#"><img class="crop" src="' + prevImgUrl +'" /></a> \
                       </div> \
                       <div class="single_imgwrapper"> \
                         <a href="#"><img class="crop" src="' + nextImgUrl +'" /></a> \
                       </div> \
                     </div> \
            </div></div>';
            var singleColumn = $(singleColumnStr);

    header.append(singleColumn);
    singleSection.append(header);

	$("body").append(singleSection);

	$(".crop").on("click", function(){
		var imgUrl2 = $(this).attr("src");
		$(".single_mainimg").attr("src",imgUrl2);
	});

}

function closeSingelPage() {
	window.location ="";
	$("section.single-design-page").remove();
	$("div.main-page").css("display","block");
}