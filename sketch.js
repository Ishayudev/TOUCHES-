var fixedRect, movingRect;
var re;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  re=createSprite(600,250,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  re.velocityY=2;
  fixedRect.velocityY=-2;
}

function draw() {
  background(0,0,0);
  bounceOff(re,fixedRect);
  drawSprites();
}

