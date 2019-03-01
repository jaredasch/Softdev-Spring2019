var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var actionState = "dot";
var stateHeader = document.getElementById("stateHeader");

c.addEventListener("click", function(e){
  clickEvt = getMousePos(c, e);
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

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.offsetX,
        y: evt.offsetY
    }
}
