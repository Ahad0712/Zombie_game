var bg,bgImg;
var player, shooterImg, shooter_shooting;


function perload(){
  bgImg=loadImage("assets/bg.jpeg")
  shooterImg=loadImage("assets/shooter_1.png");
  shooter_shooting=loadImage("assests/shooter_2.png");
}

function setup(){

  createCanvas(windowWidth,windowHeight);

  // adding the background Image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale=1.1;
  

//creating the player sprite
player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooterImg);
player.scale=0.3
player.debug=true;
player.setCollider("rectangle",0,0,300,300);


}

function draw(){
  background(0);



  //moving the player up and down and making capabile for moblie
  if (keyDown("UP_ARROW")||touches.length>0) {
    player.y=player.y-30;
  }
  if (keyDown("DOWN_ARROW")||touches.length>0) {
    player.y=player.y+30;
  }


//release bullets and change the image of shooter to shooting position when space is pressed
if (keyDown("space")) {
  player.addImage(shooter_shooting);
}else if(keyWentUp("space")){
  player.addImage(shooterImg);
}

}
