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
//smooth scrolling
$(function() {
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
});
//carousel

//left arrow movement
$('#rghtarrw').click(
	function(){
		$("#carousel ul").animate({"margin-left":"+=500px"});
	});

//right arrow movement
$('#lftarrw').click(
	function(){
		$("#carousel ul").animate({marginLeft:500},{duration:5000},
		function(){
			$(this).find("#first").after($(this).find("#last"));
			$(this).css({marginLeft:1500});
		});
	});