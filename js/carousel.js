//carousel

//right arrow movement
alert("hello frm caoursel");
$('#rghtarrw').click(
	function(){
		alert("hello");
		$("#list").css({"margin-left":"500px"});
		//animate(,5000);
	});

//left arrow movement
$('#lftarrw').click(
	function(){
		$("#list").css({"margin-left":"500px"});
		//animate({"margin-left":"-=500px"},5000);
	});