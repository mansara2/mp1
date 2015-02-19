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
$('#lftarrw').click(
	function(){
		var t = setInterval(
		function(){
			$("#carousel ul").animate({marginLeft:-480},1000,function(){
			$(this).find("li.last").after($(this).find("li.first"));
			$(this).css({marginLeft:0});
		},5000);
		});
	});

//right arrow movement
$('#rghtarrw').click(
	function(){
		var t = setInterval(
		function(){
			$("#carousel ul").animate({marginLeft:+480},1000,
			function(){
				$(this).find("li.first").after($(this).find("li.last"));
				$(this).css({marginLeft:0});
			}
			,5000);
		});
	});