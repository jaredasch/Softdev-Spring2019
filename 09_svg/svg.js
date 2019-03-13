var pic = document.getElementById("vimage");

function dot(x, y){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 5);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "red");
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
    if(pic.firstChild){
        var l = line(e.clientX, e.clientY, pic.lastElementChild.getAttribute("cx"), pic.lastElementChild.getAttribute("cy"));
        pic.appendChild(l);
    }
    pic.appendChild(dot(e.clientX, e.clientY));
});
