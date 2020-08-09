var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	
	roof = new Roof(250,497,140,20);
	bobObj1 = new Bob(200,500,30,30);
	bobObj2 = new Bob(235,500,30,40);
	bobObj3 = new Bob(270,500,30,30);
	bobObj4 = new Bob(305,500,30,30);
	rope = new Rope(bobObj1.body,roof.body,-BobDiameter*2, 0);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  roof.display(); 
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  rope.display();
 /* ellipse(345,364, 55, 55);
   Matter.Bodies.circle(299,345, radius, [options], [maxSides])
   World.add(world,circle);*/
  drawSprites();
 
}



