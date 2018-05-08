window.onload = function() {
	var alturaJanela = $(window).height();
	var alturaImg = $("#img_profile").height();

	$("#img_profile").css('margin-top', alturaJanela/2-(alturaImg));
}

$(document).ready(function(){
	$('.collapsible').collapsible();
	$(".button-collapse").sideNav();
});

    
