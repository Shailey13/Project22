var con;
var con2;
var con3;
var con4;
var con5;

class rope{
	constructor(body1, body2, pointA, pointB)
	{

		this.pointA = pointA;
		this.pointB = pointB;

		var options = {
			bodyA:body1,
			bodyB:body2,
			pointB: {x: this.pointA, y: this.pointB}
		}
	//create rope constraint here
	con = Matter.Constraint.create({
		pointA: {x: 320, y:100},
		bodyB: bob1,
		pointB: {x: 0, y: 0},
		length: 10,
		stiffness: 0.1
	  });
	  World.add(world, con);

	  con2 = Matter.Constraint.create({
		pointA: {x: 360, y:100},
		bodyB: bob2,
		pointB: {x: 0, y: 0},
		length: 10,
		stiffness: 0.1
	  });
	  World.add(world, con2);

	  con3 = Matter.Constraint.create({
		pointA: {x: 400, y:100},
		bodyB: bob3,
		pointB: {x: 0, y: 0},
		length: 10,
		stiffness: 0.1
	  });
	  World.add(world, con3);

	  con4 = Matter.Constraint.create({
		pointA: {x: 440, y:100},
		bodyB: bob4,
		pointB: {x: 0, y: 0},
		length: 10,
		stiffness: 0.1
	  });
	  World.add(world, con4);

	  con5 = Matter.Constraint.create({
		pointA: {x: 480, y:100},
		bodyB: bob5,
		pointB: {x: 0, y: 0},
		length: 10,
		stiffness: 0.1
	  });
	  World.add(world, con5);

	}


    //create display() here 
	/*display(){
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		line(con.pointA.x, con.pointA.y, bob1.position.x, bob1.position.y);
	}*/
}
