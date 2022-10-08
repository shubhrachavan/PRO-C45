var bg, bgImg, mario;

function preload(){
bgImg = loadImage("Images/Background.jpg")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(displayWidth/2-72,displayHeight/2-45)
  bg.addImage("bg",bgImg)
  bg.scale = 2.1

  mario = createSprite(70,displayHeight/2)
  mario.scale = 1
  
}

function draw() {
  background(255,255,255);
  
  if(keyIsDown(UP_ARROW)){
    mario.velocityY = -3
  }

  if(keyIsDown(DOWN_ARROW)){
    mario.velocityY = 3
  }
  
  drawSprites();
}