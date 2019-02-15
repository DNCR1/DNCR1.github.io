
var posX=100;
var posY=100;

var dirX=1;
var dirY=1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(222);
	
	

}

function draw() {
  posX=posX+dirX;
  if (posX>width) {
    dirX=-1;
  }
  if (posX<0) {
    dirX=1;
  }
  posY=posY+dirY;
  if (posY>height) {
    dirY=-1;
  }
  if (posY<0) {
    dirY=1;
  }
  
  ellipse(posX, posY, 30, 30);
}