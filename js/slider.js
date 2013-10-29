//$(document).ready(function() {
//	var x = 1;
//	function al (){
//		$(".tabs").find('a').eq(x).click();
//	}
//	var intervalFunc = setInterval(al, 3000);
//
//	$(".tabs").find('a').on('click', function(ev){
//		ev.preventDefault();
//		var idx = $(this).index()+1;
//		if (idx == $(".tabs").find('a').length){
//			x = 0;
//		}
//		else {
//			x = idx;
//		}
//		clearInterval(intervalFunc);
//		intervalFunc = setInterval(al, 3000);
//	});
//
//});