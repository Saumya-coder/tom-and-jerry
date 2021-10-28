var  bgImg;
var cat, cat1Img,cat2Img, cat3Img;
var mouse, mouse1Img, mouse2Img,mouse3Img;

function preload() {
  bgImg = loadImage("images/garden.png");
  cat1Img = loadAnimation("images/cat1.png");
  cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
  cat3Img = loadAnimation("images/cat4.png");
  mouse1Img = loadAnimation("images/mouse1.png");
  mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouse3Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat= createSprite(860,600);
    cat.addAnimation("catHappy",cat1Img);
    cat.scale = 0.15
    mouse = createSprite(100,600);
    mouse.addAnimation("mouseHappy",mouse1Img);
    mouse.scale = 0.15
}

function draw() {

    background(bgImg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      
      cat.addAnimation("catCollide",cat3Img);
      cat.velocityX = 0;
      cat.x =300;
      cat.scale=0.2;
      cat.changeAnimation("catCollide",cat3Img);
     
      mouse.addAnimation("mouseCollide", mouse3Img);
      mouse.scale=0.15;
      mouse.changeAnimation("mouseCollide");
    }

    drawSprites();
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5; 
      cat.addAnimation("catRunning", cat2Img);
      cat.changeAnimation("catRunning");
      
      mouse.addAnimation("mouseTeasing", mouse2Img);
      mouse.frameDelay = 25;
      mouse.changeAnimation("mouseTeasing");
  }
}
