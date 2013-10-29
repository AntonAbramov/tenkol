$(document).ready(function() {
	var x = 1;
	function al (){
		$(".tabs").find('a').eq(x).click();
		x++;
		if (x == $(".tabs").find('a').length){
			x = 0;
		}
		console.log(x);
	}
	var intervalFunc = setInterval(al, 3000);

	$(".tabs").find('a').on('click', function(ev){
		ev.preventDefault();
		var idx = $(this).index();
		clearInterval(intervalFunc);
		console.log('stoped');
	});

});