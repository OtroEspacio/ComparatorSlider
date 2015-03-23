function getMousePosition(event) {
  var x = event.clientX;
  x = x-200;
  document.getElementsByClassName("secondImage")[0].style.width = x+"px";
}