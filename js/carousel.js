//carousel

//right arrow movement
alert("hello");
$('#rghtarrw').click(
	function(){
		alert("hello");
		$("#ul").css({"margin-left":"500px"});
		//animate(,5000);
	});

//left arrow movement
$('#lftarrw').click(
	function(){
		$("#ul").css({"margin-left":"500px"});
		//animate({"margin-left":"-=500px"},5000);
	});