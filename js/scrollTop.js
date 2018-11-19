var $ = jQuery.noConflict();
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 1500){
			$('#go-to-top').fadeIn();
		}else{
			$('#go-to-top').fadeOut();
		}
	});

	$('#go-to-top').click(function(e){
		$('body,html').animate({scrollTop: 0}, 800);
        return false;
	})
});