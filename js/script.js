/* var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);
}
function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
} */
//carousel
$(document).ready(
	function(){
		//left arrow movement
		$('larrow').click(
			function(){
				alert('we here');
				if($('#list').marginLeft > 0){
					$('#list').css("margin-left":"-=500px");
				}
			}
		);
		//right arrow movement
		$('#rarrow').click(
			function(){
				if($('#list').marginLeft < 1500){
					$('#list').css("margin-left":"+=500px");
				}
			}
		);
		$(window).scroll(
			function(){
				if( 0 != $(window).scrollTop()){
					$("#nav").css("height" , "25px");
				}
				if( 0 == $(window).scrollTop()){
					$("#nav").css("height" , "50px");
				}
			}
		);
	//position indicator
		$(window).scroll(
			function(){
				if($('.about').offset.top == $(window).scrollTop()){
					$("#aboutnav").css("color" , "white");
				}
				if($('.service').offset.top == $(window).scrollTop()){
					$("#servnav").css({"color" : "white"});
				}
				if($('.signup').offset.top == $(window).scrollTop()){
					$("#signnav").css({"color" : "white"});
				}
			}
		);
	}
);
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
