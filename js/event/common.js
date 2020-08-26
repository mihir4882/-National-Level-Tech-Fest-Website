$(document).ready(function(){
	$(".button-collapse").sideNav({
		onOpen: function(el){$('.header').css({'z-index':'unset','position':'absolute'});},
		onClose: function(el){$('.header').css({'z-index':'1','position':'fixed'});}
	});
	$('select').material_select();
	$('.carousel').carousel();
	$('img#back').click(goBack);
	if($('.tabitemactive').length===0){$('.tabElement:first-child a').addClass('tabitemactive')}
	if(location.pathname.endsWith('sponsors/')){$('.page-container').css('background','white');}
})
function goBack()
{
	var cur_url =  location.pathname;
	var go_to_url = '/18/home/';
	
	if (cur_url == '/18/home/')
	{
		window.location = location.protocol + '//' + location.host + go_to_url;
	}
	
	var pathArray = location.pathname.split('/');
	var newPathname = "";
	pathArray = pathArray.filter(Boolean);
	for (i = 0; i < pathArray.length-1; i++) {
			newPathname += "/";
			newPathname += pathArray[i];
	}
	window.location = location.protocol + '//' + location.host + newPathname;
}
function checkEmail(a){}