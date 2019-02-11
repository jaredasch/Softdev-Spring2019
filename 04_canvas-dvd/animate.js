var animation = false;
var canvas = document.getElementById('playground');
var context = canvas.getContext("2d");
var outward = true;
var radius = 0;
var requestID = 0;
var X = 100;
var Y = 150;
var dx = 1;
var dy = 1;

context.fillStyle = "red";

function stop() {
  if (animation) {
    animation = false;
    window.cancelAnimationFrame(requestID);
  }
}

function circle() {
    if(!animation){
        animation = true;
        circle_animate();
    }
}

function dvd() {
  if (!animation) {
    animation = true;
    dvd_animate();
  }
}

function dvd_animate() {
  window.cancelAnimationFrame(requestID);
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (X + 100 == canvas.width || X == 0) {
    dx *= -1;
  }
  if (Y + 50 == canvas.height || Y == 0) {
    dy *= -1;
  }
  X += dx;
  Y += dy;
  var dvd = new Image();
  dvd.src = "logo_dvd.jpg"
  context.drawImage(dvd,X,Y,100,50);
  requestID = window.requestAnimationFrame(dvd_animate);
}

function circle_animate(){
    if(animation){
        if (radius >= canvas.width / 2) {
            outward = false;
        } else if (radius == 0) {
            outward = true;
        }
        radius += outward ? 1 : -1; // Ternary Operator
        context.beginPath();
        // Wipe it here
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.ellipse(canvas.width / 2, canvas.height / 2, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
        context.fill();

        requestID = window.requestAnimationFrame(circle_animate);
        // console.log(requestID);
    }
}
