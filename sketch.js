const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1; 
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options = {
		isStatic: true,
		restitution: 0.85
	}

	bob1 = Bodies.circle(320, 350, 20, bob_options);
	World.add(world, bob1);
	bob2 = Bodies.circle(360, 350, 20, bob_options);
	World.add(world, bob2);
	bob3 = Bodies.circle(400, 350, 20, bob_options);
	World.add(world, bob3);
	bob4 = Bodies.circle(440, 350, 20, bob_options);
	World.add(world, bob4);
	bob5 = Bodies.circle(480, 350, 20, bob_options);
	World.add(world, bob5);

	rope1 = new rope(bob1, roof, -80, 0);
	rope2 = new rope(bob2, roof, -80, 0);
	rope3 = new rope(bob3, roof, -80, 0);
	rope4 = new rope(bob4, roof, -80, 0);
	rope5 = new rope(bob5, roof, -80, 0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("#99004d");

  keyPressed();

  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  line(con.pointA.x, con.pointA.y, bob1.position.x, bob1.position.y);
  line(con2.pointA.x, con2.pointA.y, bob2.position.x, bob2.position.y);
  line(con3.pointA.x, con3.pointA.y, bob3.position.x, bob3.position.y);
  line(con4.pointA.x, con4.pointA.y, bob4.position.x, bob4.position.y);
  line(con5.pointA.x, con5.pointA.y, bob5.position.x, bob5.position.y);
  pop();
  
  //create ellipse shape for multiple bobs here
	ellipse(bob1.position.x, bob1.position.y, 20);
	ellipse(bob2.position.x, bob2.position.y, 20);
	ellipse(bob3.position.x, bob3.position.y, 20);
	ellipse(bob4.position.x, bob4.position.y, 20);
	ellipse(bob5.position.x, bob5.position.y, 20);

 
	
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1, {x: 0, y: 0}, {x: 0.05, y: 0});
	}
}