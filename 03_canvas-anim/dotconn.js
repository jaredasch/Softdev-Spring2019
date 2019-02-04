var animation = false;
var canvas = document.getElementById('playground');
var context = canvas.getContext("2d");
var outward = true;
var radius = 0;
var requestID = 0;

context.fillStyle = "red";

function stop() {
  if (animation) {
    animation = false;
    window.cancelAnimationFrame(requestID);
  }
}

function draw() {
    if(!animation){
        animation = true;
        animate();
    }
}

function animate(){
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

        requestID = window.requestAnimationFrame(animate);
        // console.log(requestID);
    }
}
