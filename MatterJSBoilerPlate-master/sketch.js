
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobimage, bob1, bob2, bob3, bob4, bob5, bob6, bob7;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var chain1, chain2, chain3, chain4, chain5, chain6, chain7;

function preload()
{
	bobimage = loadImage("bob2.jpg");	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	stand1 = createSprite(100, 100, 100, 30);
	stand2 = createSprite(200, 100, 100, 30);
	stand3 = createSprite(300, 100, 100, 30);
	stand4 = createSprite(400, 100, 100, 30);
	stand5 = createSprite(500, 100, 100, 30);
	stand6 = createSprite(600, 100, 100, 30);
	stand7 = createSprite(700, 100, 100, 30);
	
	bob1 = createSprite(100, 400, 50, 50);
	bob1.addImage(bobimage);
	bob1.scale = 0.5;
	
	bob2 = createSprite(190, 400, 50, 50);
	bob2.addImage(bobimage);
	bob2.scale = 0.5;

	bob3 = createSprite(280, 400, 50, 50);
	bob3.addImage(bobimage);
	bob3.scale = 0.5;

	bob4 = createSprite(370, 400, 50, 50);
	bob4.addImage(bobimage);
	bob4.scale = 0.5;

	bob5 = createSprite(460, 400, 50, 50);
	bob5.addImage(bobimage);
	bob5.scale = 0.5;

	bob6 = createSprite(550, 400, 50, 50);
	bob6.addImage(bobimage);
	bob6.scale = 0.5;

	bob7 = createSprite(640, 400, 50, 50);
	bob7.addImage(bobimage);
	bob7.scale = 0.5;

	chain1 = new Chain(bob1, stand1);
	chain2 = new Chain(bob2, stand2);
	chain3 = new Chain(bob3, stand3);
	chain4 = new Chain(bob4, stand4);
	chain5 = new Chain(bob5, stand5);
	chain6 = new Chain(bob6, stand6);
	chain7 = new Chain(bob7, stand7);
  
}


function draw() {
  background(0);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();  
  chain7.display();
  
  drawSprites();
 
}



