
var monkey , monkeyrunning;
var fruitImage, obstacle, obstacleImage;
var fruit,ground, obstacleGroup
var score;
var gameState="play";
var score=0;
function preload(){

  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkeyrunning);
  monkey.scale=0.1;
  


ground=createSprite(400,350,900,10);
  ground.velocityX=-4;

  console.log(ground.x);

}


function draw() {
  background("white");
  monkey.collide(ground);
    if(ground.x<0){
      ground.x=ground.width/2;
  }  
  text("score= "+score,100,50);
  if (gameState==="play"){
    score = score + Math.round(getFrameRate()/30);
    spawnObstacles();
    spawnFruits();
  }
  if (keyDown("space") && monkey.y>310){
    monkey.velocityY=monkey.velocityY-13;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,325,10,40);
    obstacle.velocityX=-4;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacle.lifetime=150
  }
}

function spawnFruits() {
  if(frameCount % 60 === 0) {
    var fruit = createSprite(400,250,10,40);
  fruit.velocityX=-4;
fruit.addImage(fruitImage);
    fruit.scale=0.15;
    fruit.lifetime=150;
  }
}




