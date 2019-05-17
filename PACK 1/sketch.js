var puntoLista = [];
var canvas;
var posX=100;
var posY=100;
var dirX=30;
var dirY=30; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0); 
  createA('https://www.openprocessing.org/user/164013#sketches','openprocessing','_blank');
  createA('https://github.com/DNCR1','github','_blank');
  createA+('https://www.youtube.com/channel/UCY-Rjyr2lP-nJDyZ08anFPw/featured?view_as=subscriber','youtube','_blank');
   
}

function draw() {
    
  
    button = createButton('OpenProcessing');
    button. size(windowWidth/1.50, windowHeight/8);
    button. position(windowWidth/5, windowHeight/3);

    button = createButton('Github');
    button. size(windowWidth/1.50, windowHeight/8);
    button. position(windowWidth/5, windowHeight/2);
    button = createButton('Youtube');
    button. size(windowWidth/1.50, windowHeight/8);
    button. position(windowWidth/5, windowHeight/1.5);

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
	 texto();
	 fill (255,255,255);
     
  
}


function texto(){
	
	fill(209, 16, 26);
	textFont('IMPACT');
	textAlign(CENTER);
	textSize(100);
	text("DAVID CONTRERAS", width/2, height - 8*(height/11) );
    
} 


  
function mousePressed(){
	 
  if(mouseX > (width/2-200) && mouseX <(width/2+200) && mouseY> (height - 6.7*(    height/11)-30) && mouseY<(height - 6.7*(height/11)+20) ){
  +
    window.open('https://www.openprocessing.org/user/164013#sketches','openprocessing','_blank');
   }
	
  if(mouseX> (width/2-200) && mouseX<(width/2+200) && mouseY> (height - 5.0*(height/11)-30) && mouseY<(height - 5.0*(height/11)+20) ){
		window. open('https://github.com/DNCR1','github','_blank');
	}
	
  if(mouseX> (width/2-200) && mouseX<(width/2+200) && mouseY> (height - 3.5*(height/11)-30) && mouseY<(height - (height/11)+20) ){
		window.open('https://www.youtube.com/channel/UCY-Rjyr2lP-nJDyZ08anFPw/featured?view_as=subscriber','youtube','_blank');
     	}
  
}

function windowResized(){ resizeCanvas(windowWidth,windowHeigth); }
