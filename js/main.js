$(function () {
    
    "use strict";
	 /* smooth scroll
  -------------------------------------------------------*/
	  $.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 900,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70,         // offste (in px) for fixed top navigation
		upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

	  });
	
	 var win = $(window);
           
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });
	
	/* close navbar-collapse when a  clicked */
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').removeClass('show');
		$('.navbar .bars').removeClass('bars-rotate'); 
    });
	
	$('.navbar .bars').click(function () {
        $(this).toggleClass('bars-rotate'); 
    });
	
	$('.sidebar-box .close-menu').on('click', function(){
		$('.sidebar-box').removeClass('show');
	});
	
	$('.bars-2').on('click', function(e){
		e.preventDefault();
		$('.sidebar-box').addClass('show');
	});
									 
});

$(window).on("load",function (){	
     $('.load-wrapp').fadeOut(100); 
});