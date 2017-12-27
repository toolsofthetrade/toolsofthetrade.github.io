//Javascript Specifically for Tools of the Trade Website 
//by C Todd Rhodes
//12/27/2017
//
// Function MoreLess (supports up to 3 "show more" buttons currently 
// but can be expanded. 
//
//

var pToggle = [0,0,0];
var pName = ["p1", "p2", "p3"];
var ViewMoreName = ["ViewMore1", "ViewMore2", "ViewMore3"];
var hashtag = "#";

function MoreLess(x){

if (pToggle[x] == 0){
	$(hashtag.concat(pName[x])).css({
		'height': 'auto'
	});
	document.getElementById(ViewMoreName[x]).innerHTML="show less &uarr;";
	pToggle[x] = 1;

}
else if (pToggle[x] == 1){
	$(hashtag.concat(pName[x])).css({
		'height': '10em'
	});
	document.getElementById(ViewMoreName[x]).innerHTML="show more &darr;";
	pToggle[x] = 0 ;
}
}
