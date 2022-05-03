var quadrado
function setup() {
  createCanvas(1000, 1000);
  quadrado= createSprite(200,200,50,50)
  quadrado.shapeColor="yellow"
}

function draw() {
  background("yellow");

  drawSprites()
if (keyDown("d")) {
quadrado.x=quadrado.x+8
background("darkblue");
quadrado.shapeColor="darkblue"
}
if (keyDown("a")){
  quadrado.x=quadrado.x-8
  background("grey");
  quadrado.shapeColor="grey"
}
if (keyDown("w")){
  quadrado.y=quadrado.y-8
  background("white");
  quadrado.shapeColor="white"
}
if (keyDown("s")){
  quadrado.y=quadrado.y+8
  background("black");
  quadrado.shapeColor="black"
}
}





