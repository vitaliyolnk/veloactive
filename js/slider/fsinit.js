// Can also be used with $(document).ready()
$(window).load(function() {
  $('#flexcontainer').flexslider({
    animation: "slide",
    controlsContainer: '.flex-container'
  });
});

$(window).load(function() {
  $('#flexcontainer_carusel').flexslider(
  {
  	animation: "slide",
    animationLoop: false,
    itemWidth: 290,
    itemMargin: 50
  });
});