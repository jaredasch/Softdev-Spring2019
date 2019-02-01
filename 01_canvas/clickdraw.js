var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var actionState = "dot";
var stateHeader = document.getElementById("stateHeader");

c.addEventListener("click", function(e){
  if(actionState == "dot"){
    ctx.beginPath();
    ctx.ellipse(e.offsetX, e.offsetY, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
  } else {
    ctx.fillRect(e.offsetX, e.offsetY, 20, 20);
  }
});

var toggleBtn = document.getElementById("toggleActions");
toggleBtn.addEventListener("click", function(e){
  if(actionState == "dot"){
    toggleBtn.innerHTML = "Toggle to Dots";
    stateHeader.innerHTML = "It's RECTANGLE time!"
    actionState = "rect";
  } else {
    stateHeader.innerHTML = "It's DOT time!";
    toggleBtn.innerHTML = "Toggle to Rectangles";
    actionState = "dot";
  }
});

var clearButton = document.getElementById("clearCanvas")
clearButton.addEventListener("click", function(e){
    ctx.clearRect(0,0, c.width, c.height);
});

/*
preventDefault()
Eliminates the default function of an object(ex button,checkbox,form). After clicking a button once where the preventDefault() function is triggered, that buttons functionality would become mute.

beginPath()
Saves the point at which you are drawing lines. It is like if Mario walked down the map, the game would start with beginPath() and save the last position he was at before starting another beginPath()

e.offsetX
Gives the x-position of the mouse at the instance it is clicked, based on the screen which is a grid of pixels.

e.offsetY
Gives the y-position of the mouse at the instance it is clicked , based on the screen which is a grid of pixels.
*/
