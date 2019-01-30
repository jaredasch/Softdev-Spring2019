var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var actionState = "dot";

c.addEventListener("click", function(e){
  if(actionState == "dot"){
    ctx.ellipse(e.clientX, e.clientY, 10, 10, 0, 0, 2);
  } else {
    ctx.fillRect(e.clientX, e.clientY, 10, 10);
  }
});

var btn = document.getElementById("toggleActions");
btn.addEventListener("click", function(e){
  if(actionState == "dot"){
    btn.innerHTML = "Toggle to Dots";
    actionState = "rect";
  } else {
    btn.innerHTML = "Toggle to Rectangles";
    actionState = "dot";
  }
})
