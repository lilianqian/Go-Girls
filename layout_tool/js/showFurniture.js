var chairPicFileName = ["chair/chair1.jpg",	"chair/chair3.png",	"chair/chair5.jpg",	"chair/chair7.jpg",	"chair/chair9.jpg",
"chair/chair2.jpg",	"chair/chair4.jpg",	"chair/chair6.jpg",	"chair/chair8.jpg"];

var doorPicFileName = ["doorway/dw1.jpg", "hallway/hw1.jpg"];
function loadFurniturePic(str) {
	switch (str) {
		case "armchair":
			showAll("armchair", chairPicFileName);
			break;
		case "door":
			showAll("door", doorPicFileName);
			break;
		case "table":
			showAll("door", chairPicFileName);
			break;
		default:
	}
}

function showAll(str, fFileName) {
	$("div.layout_furniture_column#col_1").html("");
	$("div.layout_furniture_column#col_2").html("");
	$("div.layout_furniture_column#col_3").html("");

	$("div.layout_furniture").attr("id",str);

	for (var i = 0; i < fFileName.length;i++) {
		var chairDiv = $("<div class='layout_furniture_"+str+"'>");
		var chairImg = $("<img src=../img/" + fFileName[i]+" />");
		chairDiv.append(chairImg);

		if (i % 3 === 0) {
			$("div.layout_furniture_column#col_1").append(chairDiv);
		} else if (i % 3 === 1) {
			$("div.layout_furniture_column#col_2").append(chairDiv);
		} else if (i % 3 === 2) {
			$("div.layout_furniture_column#col_3").append(chairDiv);
		}
	}
}