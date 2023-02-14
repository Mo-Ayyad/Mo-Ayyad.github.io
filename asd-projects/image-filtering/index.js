// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here


function applyFilter() {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      // 2a
      var rgbString = image[i][j];

      // 2b
      var rgbNumbers = rgbStringToArray(rgbString);

      // 2c
      rgbNumbers[RED] = 255;

      // 2d
      rgbString = rgbArrayToString(rgbNumbers);

      // 2e
      image[i][j] = rgbString;

    }
  }
}



// function applyFilter(filterFunction) {
//   for (var i = 0; i < image.length; i++) {
//     for (var j = 0; j < image[i].length; j++) {
//       var rgbString = image[i][j];
//       var rgbNumbers = rgbStringToArray(rgbString);
//       filterFunction(rgbNumbers);
//       rgbString = rgbArrayToString(rgbNumbers);
//       image[i][j] = rgbString;
//     }
//   }
// }

// function applyAndRender() {

//   applyFilter(reddify);
// }





// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  return Math.max(0, Math.min(255, num));
}


// TODO 3: Create reddify function
function reddify(rgbNumbers) {
  rgbNumbers[RED] = 200;
}


// TODO 6: Create more filter functions


// CHALLENGE code goes below here
