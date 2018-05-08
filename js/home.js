$(document).ready(function(){
	$('.collapsible').collapsible();
	$('.button-collapse').sideNav();
	$('.materialboxed').materialbox();
    $('select').material_select();	
    $('.dropdown-button').dropdown();
});

function show_element (id) {
	if($(id).css('display')==='block'){
		$(id).css('display','none');
	}else{
		$(id).css('display','block');
	}
}
    
