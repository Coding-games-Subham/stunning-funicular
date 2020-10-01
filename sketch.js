
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 570);
    //console.log("test")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper();
	ground = new Ground(400,height,800,20);
	
	log2 = new dustbin(600,550,200,300);
	

	//Engine.run(engine);
  
}


function draw() {
	background("white");
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
  
 ground.display();
 
 log2.display();
 
 ball.display();
 log2.display();
 ball.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("hi");
		Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75})
	   
	 }
   }


