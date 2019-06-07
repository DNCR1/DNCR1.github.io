var puntoLista = [];
var canvas;
var posX=100;
var posY=100;
var dirX=30;
var dirY=30; 

function setup() {
  var javaspt = createCanvas(windowWidth, windowHeight);
  javaspt.position(0,0);
  javaspt.style('z-index',-1);
  javaspt.parent('java');
  background(0); 

   
}

function draw() {
    
  
    

  posX=posX+dirX;
  if (posX>width) {
    dirX=-30;
  }
  if (posX<0) {
    dirX=30;
  }
  posY=posY+dirY;
  if (posY>height) {
    dirY=-30;
  }
  if (posY<0) {
    dirY=30;
  }
  
  ellipse(posX, posY, 20, 20);
  
   for (var D=0; D<puntoLista.length; D++) {
    puntoLista[D].mover();
    noStroke();
    fill( 0, 0, 0, i*11+30);  
    triangle(puntoLista[D].location.x, puntotLista[D].location.y, width/4, height/8, width - width/4, height/8-25);
    
  }

   fill (255,255,255);
     
  
}


function windowResized(){ resizeCanvas(windowWidth,windowHeigth); }
