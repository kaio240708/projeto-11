var ship
var sea
var seaImg
var shipImg

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(280,300,20,20);
  ship. addAnimation("ship",shipImg);
  ship.scale = 0.18
  //sea.addImage("sea",seaImg);
}

function draw() {
  background(seaImg);
    drawSprites();
    
 
}
