var pic = document.getElementById("vimage");

function dot(x, y){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 25);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "blue");
    return c;
}

function line(x1, y1, x2, y2){
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", x1);
    l.setAttribute("y1", y1);
    l.setAttribute("x2", x2);
    l.setAttribute("y2", y2);
    l.setAttribute("stroke", "black");
    return l;
}

function clearSvg(){
    while(pic.firstChild){
        pic.removeChild(pic.firstChild);
    }
}

pic.addEventListener("click", function(e){
    if(e.target.nodeName == "svg"){
        pic.appendChild(dot(e.clientX, e.clientY));
    }
});

pic.addEventListener("click", function(e){
    if(e.target.nodeName == "circle"){
        if(e.target.getAttribute("fill") == "blue"){
            e.target.setAttribute("fill", "green");
            e.target.setAttribute("stroke", "green");
        } else {
            pic.removeChild(e.target);
            pic.appendChild(dot(randint(0, 500), randint(0, 500)));
        }
    }
});

function randint(min, max){
    return Math.floor((max - min) * Math.random()) + min;
}
