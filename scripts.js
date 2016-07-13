$(document).ready(function() {

var $navBar = $('ul#navBar');
var $li = $('li');
//all li width of at least 200px
$li.css('width', '400px');
//all li height of at least 50px
$li.css('height', '75px');
// for each li, fade to 0.25 opacity for hover
$li.hover(function() {
	$( this ).fadeTo('slow', 0.25);	
	},
//return to full opacity when cursor removed
	function(){
	$( this ).fadeTo('slow', 1);
	}
);
//each li changes to 'Click!' when clicked

//each li changes colors when clicked
$( "li" ).addClass(function( index, currentClass ) {
  var addedClass;
 
  if ( currentClass === "one" ) {
    addedClass = "orange";
  }
 
  return addedClass;
});



}); // closing out document ready