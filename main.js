var windoWidth;
var sliderWidth;
var resultWidth;
$(document).ready(function() {
	windoWidth = $(window).width();
	sliderWidth = $(".firstImage").width();
	resultWidth = (windoWidth - sliderWidth) / 2;
});
function getMousePosition(event) {
  var x = event.clientX;
  x = x-resultWidth;
  $(".secondImage").width(x+"px");
}