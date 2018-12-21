$(document).ready(function() {

	
	/* SCROOL */
	$('#menu a').bind('click',function(event){
                
		var $anchor = $(this);
		
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
				
		event.preventDefault();
	});

	/* BTN INICIO */		
	$("#btnTopo").hide(); // hide first
		
	$(function () { // fade
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('#btnTopo').fadeIn();
			} else {
				$('#btnTopo').fadeOut();
			}
		});
	
		// scroll body to 0px on click
		$('#btnTopo a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
	
	/* BARRA DE ROLAGEM */
	$('.divScroll').tinyscrollbar({ sizethumb: 40 });
	
	/* LIVRO */
	
	$(".mybook").booklet();

});
