
var roof;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var rope1,rope2,rope3,rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

roof = new Roof(700,100,1200,30);

bobobject1 = new Bob(100,400,150);
bobobject2 = new Bob(250,400,150);
bobobject3 = new Bob(400,400,150);
bobobject4 = new Bob(550,400,150);
bobobject5 = new Bob(700,400,150);

rope1 = new Rope(bobobject1.body,{x:250,y:100});
rope2 = new Rope(bobobject2.body,{x:500,y:100});
rope3 = new Rope(bobobject3.body,{x:750,y:100});
rope4 = new Rope(bobobject4.body,{x:1000,y:100});
rope5 = new Rope(bobobject5.body,{x:1250,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("red");
  
roof.display();

bobobject1.display();
bobobject2.display();
bobobject3.display();
bobobject4.display();
bobobject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===38){
	
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x : -500 , y : -500})

	
	}
	
	
	}

