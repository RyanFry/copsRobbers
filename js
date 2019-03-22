window.onload = initAll;
var canvas;
var ctx;
var interval;

//xpos for background
var xpos1 = [0, 200, 400, 600, 800, 1000];

//cop
var x = 100;
var y = 140;
var xspeed = 0;
var yspeed = 0;

//robber
var robberX = 600;
var robberY = 400;
var robXspeed = 0
var robYspeed = 0;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

//buidings
var buildX = 500;
var buildY = 100;
var buildspeed = 0

function initAll()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    x+=canvas.offsetLeft;
    y+=canvas.offsetTop;

    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'absolute';
    imgObj.style.top = y+'px'; 
    imgObj.style.left = x+'px'; 
    imgObj.style.visibility='visible';

    imgObj2 = document.getElementById('myImage2');
    imgObj2.style.position = 'absolute';
    imgObj2.style.top = buildX+'px'; 
    imgObj2.style.left = buildY+'px'; 
    imgObj2.style.visibility='visible';

    document.addEventListener("keydown",keyDownHandler,false);
    document.addEventListener("keyup",keyUpHandler,false);
    interval = setInterval(play,10);
    play();
}
function play()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    background();
    moveBackground();
    drawCop();
    moveCop();
    drawRobber();
    moveRobber();
    collision();
}
function background() //
{
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 1200, 300);
    ctx.beginPath();

    //road lines
    ctx.moveTo(0, 450);
    ctx.lineTo(1200, 450);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    //buildings
    ctx.beginPath();
    imgObj2.style.top = 8+'px';
    imgObj2.style.left = buildX+'px';
}
function moveBackground()
{
    buildspeed = -5;
    buildX+=buildspeed;
    if(buildX <= 0)
    {
        imgObj2.style.visibility = 'hidden';
        buildX = 1300;
        imgObj2.style.visibility = 'visible';
    }
}
function drawCop()
{
    ctx.beginPath();
    imgObj.style.top = y+'px';
    imgObj.style.left = x+'px';
}
function drawRobber()
{
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(robberX, robberY, 75, 50);
}
function collision()
{
    if(y-canvas.offsetTop <= 300 || y-canvas.offsetTop >= 525)
    {
        yspeed = 0;
    }
}
function moveRobber()
{
    //needs to avoid objects
    robberX += robXspeed;
    robberY += robYspeed;
}
function moveCop()
{
    if(downPressed==true)
    {
        yspeed = 15;
    }
    else if(upPressed == true)
    {
        yspeed = -15;
    }
    else if(upPressed==false)
    {
        yspeed = 0;
    }
    else if(downPressed == false)
    {
        yspeed = 0;
    }
    x += xspeed;
    y += yspeed;
}
function keyDownHandler(e)
{
    if(e.keyCode == 39)
    {
        rightPressed = true;
    }
    else if(e.keyCode == 37)
    {
        leftPressed = true;
    }
    else if(e.keyCode == 38)
    {
        upPressed = true;
    }
    else if(e.keyCode == 40)
    {
        downPressed = true;
    }
}
function keyUpHandler(e)
{
    if(e.keyCode == 39)
    {
        rightPressed = false;
    }
    else if(e.keyCode == 37)
    {
        leftPressed = false;
    }
    else if(e.keyCode == 38)
    {
        upPressed = false;
    }
    else if(e.keyCode == 40)
    {
        downPressed = false;
    }
}
