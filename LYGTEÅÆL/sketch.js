var lyspælR = 179 
var lyspælG = 179
var lyspælB = 179

var lysR = 255
var lysG = 251
var lysB = 43

var lys = 1


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(92, 92, 92);
  

fill(0,0,0);
strokeWeight(2)
arc(159, 150, 80, 80, PI, TWO_PI);
//^^selve lampen
  
noStroke()
fill(lysR, lysG, lysB)
quad(120, 150, 198, 150, 298, 400, 20, 400);
//^^lyset fra lampen
 
  noFill();
  stroke(0,0,0);
  strokeWeight(7);
  arc(188, 110, 60, 80, PI, TWO_PI);
  //^^den bøjede del af lygtepæl
  
  //noStroke()
  line(218, 110, 218, 400);
  //^^lygtpælen, tynd del
  
  fill(lyspælR,lyspælG,lyspælB)
  noStroke()
  strokeWeight(1)
  //fill(0,0,0)
  quad(212, 300, 224, 300, 228, 310, 208, 310);
  quad(208, 310, 228, 310, 228, 400, 208, 400);
  //^^thicc del i bunden af lygtepælen
  
  noStroke()
  quad(214, 190, 222, 210, 222, 300, 214, 300);
  //^^oplyste del af den tynde del af lygtepælen
}

function keyPressed() {
if (keyCode === ENTER && lys == 1) {
    
  


  
  

}
}