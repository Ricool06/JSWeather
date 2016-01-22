var c = document.getElementById("c");
var ctx = c.getContext("2d");
setInterval(drawloop, 16);

var weatherType = "rain";

function drawloop(){
    ctx.beginPath();
    ctx.clearRect(0,0,c.width,c.height);
    ctx.closePath();

    if(weatherType == "rain"){
        drawRain();
    }
}
