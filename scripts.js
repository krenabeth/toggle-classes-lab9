$(document).ready(function() {

// global variable for li
var $li = $('li');
var $navBar = $('.navBar');
//all li width of at least 200px  
// //all li height of at least 50px
$(function() {
	$($navBar).css ({
		'width': '325px',
		'height': '50px'
	});
});
$(function() {
	$('li').hide().slideDown('6000');
});

// for each li, fade to 0.25 opacity for hover
$li.hover(function() {
	$( this ).fadeTo('slow', 0.25);	
	},
//return to full opacity when cursor removed
	function(){
	$( this ).fadeTo('slow', 1);
	}
);

// each li changes to 'Click!' when clicked
// and first changes to orange
$($('#one')).on('click', function() {
	$( this ).append(' Clicked!'),
	$( this ).addClass('orange')
});
// second li to red
$($('#two')).on('click', function() {
	$( this ).append(' Clicked!'),
	$( this ).addClass('red')
});
//third to green
$($('#three')).on('click', function() {
	$( this ).append(' Clicked!'),
	$( this ).addClass('green')
});
//fourth to blue
$($('#four')).on('click', function() {
	$( this ).append(' Clicked!'),
	$( this ).addClass('blue')
});

}); // closing out document ready