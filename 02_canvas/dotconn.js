// Cathy Cai, Shin Bamba, and Jared Asch
// SoftDev2 pd6
// K#02: Connecting the Dots
// 2019-02-03

// getting variables in order
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");

// var for if drawn
var drawn = false

// var for the last dot
var last = null;

// clear the canvas, there is no more "last dot"
clear.addEventListener('click', function(e){
    if (!drawn) {

      // stops the default action of the event from happening
      e.preventDefault()
      warning.innerHTML = "nothing to clear!"
    }
    else {
      warning.innerHTML = ""
      ctx.clearRect(0, 0, c.clientWidth, c.clientHeight)
      drawn = false;
      last = null;
    }
  }
)

// draw the box or dot
c.addEventListener('click', function(e){

    //getting coordinates of mouse click, accounting for offset of page
    var xcor = e.offsetX;
    var ycor = e.offsetY;


    // begins the path (can also reset the current path

    if(last){

        // direct path to start on the last dot
        ctx.moveTo(last.x, last.y)

        // direct path to reach the clicked dot
        ctx.lineTo(xcor, ycor);

        // draws line
        ctx.stroke();
        // console.log('line')
        // console.log(last.x)
        // console.log(last.y)
    }

    ctx.beginPath();
    ctx.ellipse(xcor, ycor, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke(); //draws ellipse
    ctx.fillStyle = "black";
    ctx.fill(); //fills it

    // set the last dot to the new dot
    last = {x: xcor, y: ycor};
    drawn = true;
    // console.log('ellipse')
    // console.log(xcor)
    // console.log(ycor)
    }
)

