/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  // var FRAME_RATE = 60;
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  var BOARD_WIDTH = $("#board").width();
  var BOARD_HEIGHT = $("#board").height();
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }

  var positionX = 750;
  var positionY = 330;
  var speedX = 0;
  var speedY = 0;




  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionBox();
    checkForBorderCollision();
  }


    /* 
    Called in response to events.
    */
    function handleKeyDown(event) {
      
      if (event.which === KEY.LEFT) {
        speedX = -5
      }
      if (event.which === KEY.UP) {
        speedY = -5
      }
      if (event.which === KEY.RIGHT) {
        speedX = 5
      }
      if (event.which === KEY.DOWN) {
        speedY = 5
      }


    }

    function handleKeyUp(event) {
      if (event.which === KEY.LEFT) {
        speedX = 0;
      }
      if (event.which === KEY.UP) {
        speedY = 0;
      }
      if (event.which === KEY.RIGHT) {
        speedX = 0;
      }
      if (event.which === KEY.DOWN) {
        speedY = 0;
      }


    }




  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionBox() {
    positionX += speedX;
    $("#walker").css("left", positionX)

    positionY += speedY;
    $("#walker").css("top", positionY)

  }

function checkForBorderCollision(){
if (positionX > BOARD_WIDTH - $("#walker").width()){
  positionX = BOARD_WIDTH - $("#walker").width();
}
else if(positionX < 0){
  positionX = 0;
}


if (positionY > BOARD_HEIGHT - $("#walker").height()){
  positionY = BOARD_HEIGHT - $("#walker").height();
}
else if(positionY < 0){
  positionY = 0;
}

}




  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
