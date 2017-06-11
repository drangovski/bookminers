$(function(){

	// Slide toggle main navigation
	$('.mhl-menu').on("click", function(e){
		e.preventDefault();
		$('.header-nav-wrapper').stop().slideToggle();
		$(this).toggleClass('active');
	});

	// Scroll to Our Mission section
	$(".ths-scroll-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#our-mission-section").offset().top
    }, 500);
	});

	// Fade in and move Our Mission blocks to Top:0 
  $(window).scroll( function(){
    $('.our-mission-blocks > div').each( function(i){
        
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 700;  
      
        if( bottom_of_window > bottom_of_object ){
            
            $(this).addClass('om-fade');
                
        }
    }); 
  });

});