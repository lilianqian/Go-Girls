	var fileName = ["armchair-50.png","door-50.png",		"table-50.png",
"bed-50.png",		"hot_tube-50.png",		"toilet_pan-50.png",
"campfire-50.png",		"lamp-50.png",		"wallpaper_roll-50.png",
"commode-50.png",	"roller_brush-50.png",	"wardrobe-50.png",
"crib-50.png",		"sofa-50.png",
"door-50(2).png",		"stairs-50.png"];

function loadAllFurnitureIcon() {


	for (var i =0; i < fileName.length; i++) {

		var count = 0;

		while(count < 10) {
			var div = $("<div class='dynDiv_moveDiv' id='move"+i+"'>");

			div.css({
				"background":"url('image/icon/"+fileName[i]+"')",
				"left":60 * (i % 2),
				"top":60 * Math.floor(i / 2),
				"background-size": "cover"
			});


			var tl = '<div class="dynDiv_resizeDiv_tl"></div>';
			var tr = '<div class="dynDiv_resizeDiv_tr"></div>';
			var bl = '<div class="dynDiv_resizeDiv_bl"></div>';
			var br = '<div class="dynDiv_resizeDiv_br"></div>';
			div.append(tl, tr, bl, br);
			$("div#layout_drop_box").append(div);

			count++;
		
		}
	}
		

	
}


function allowDrop(ev) {
	ev.preventDefault();
}



$(document).ready(function() {
	loadAllFurnitureIcon();
});