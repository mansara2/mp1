
var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}
//carousel

//right arrow movement
alert("hello from script");
$(document).ready(function(){
		$("#list").css({"margin-left":"500px"});
		//animate(,5000);
		$('#rghtarrw').hover(function() {alert("hello from script");});
$('#rghtarrw').click(
	function(){
		alert("hello");
		$("#list").css({"margin-left":"+=500px"});
		//animate(,5000);
	}
);
	});


//left arrow movement
$('#lftarrw').click(
	function(){
		$("#list").css({"margin-left":"500px"});
		//animate({"margin-left":"-=500px"},5000);
	}
);
$("#list").click(function(){alert("jquery");});
//smooth scrolling
/* $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}); */
