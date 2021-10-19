const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var gameState = "serve";

function preload(){
	ball_img = loadImage("Images/ball.png");
	zombie_img = loadImage("Images/zombie.png");
	backgroung_img = loadImage("Images/background.png");
	slingshot_img = loadImage("Images/slingshot.png")
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
	world = engine.world;

	form = new Form();

	ball = createSprite(displayWidth/4,displayHeight/2,50,50);
	ball = addImage("Images/ball.png");

	slingshot = createSprite(displayWidth/4,displayHeight/2+10,100,80);
	slingshot = addImage("Images/slingshot.png");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(gameState === "serve"){
	background(backgroung_img);
    form.display();
	textSize(70);
	fill("green");
	stroke("brown");
	strokeWeight(15);
	text("CATAPULT KING",530,150);
  }
  else if(gameState === "play"){
    background(backgroung_img);
	text.visible = false;
  }
  
  drawSprites();
 
}



