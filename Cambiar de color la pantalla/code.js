onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("image1", "click", function( ) {
  playSound("assets/Tortuga-Cantando-Persa.mp3", false);
});
onEvent("text_input1", "click", function( ) {
  setProperty("screen1", "image", "assets/3e79e1a975dfca1baf0fb9c373f8b352.jpg");
});
