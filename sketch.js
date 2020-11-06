const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper , dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 680);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper=new Paper(100,100,20);
   ground=new Ground(50,690,800,10);
   fill("blue");
  dustbin1=new Dustbin(1000,600,40,400);
	dustbin2=new Dustbin(1000,600,40,400);
	dustbin3=new Dustbin(1000,600,400,40);
  //Create a Ground
  ground=new Ground(1190,0,1400,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}

