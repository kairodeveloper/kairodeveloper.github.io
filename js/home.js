$(document).ready(function(){
	$('.collapsible').collapsible();
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
});


function go_to (element_id) {
	var top = document.getElementById(element_id).offsetTop;
	window.scrollTo(0, top);
}
    
