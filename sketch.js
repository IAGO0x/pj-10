var sea,ship;//criou uma variavel ship e sea
var seaImg,shipImg1;//criou uma variavel que vai receber as imagems

function preload(){
  seaImg = loadImage("sea.png");//carregou a imagem do sea
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  //criando sprite ship
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingship",shipImg1)
  ship.scale = 0.25;
 
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(sea.x<0) {
    sea.x = sea.width/8

  } 
  drawSprites();
}
