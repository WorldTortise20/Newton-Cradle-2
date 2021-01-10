
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var gs = "observe";
var bg,tc;

function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Cradle bobs
b1 = new Bob(280,175,40);
b2 = new Bob(320,175,40);
b3 = new Bob(360,175,40);
b4 = new Bob(400,175,40);
b5 = new Bob(440,175,40);

//Roof for cosmetic purposes
g = new Ground(350,height/4,250,15);

//Ropes to constrain bobs
s = new rope(b1.body, {x:280,y:175});
a = new rope(b2.body, {x:320,y:175});
b = new rope(b3.body, {x:360,y:175});
c = new rope(b4.body, {x:400,y:175});
d = new rope(b5.body, {x:440,y:175});

	Engine.run(engine);

bg = (random(0,255),random(0,255),random(0,255));
tc = (random(0,255),random(0,255),random(0,255));
}


function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);
  
  textSize(15.4);
  fill(tc)
  text("Replicating the famous Issac Newton's cradle, this program allows you to drag any bob and observe the outcome.",10,150);
  text("Press 1 to move bob 1; 2, bob2; 3, bob3; 4, bob4; 5, bob5",50,600);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  
  s.display();
  a.display();
  b.display();
  c.display();
  d.display();

  g.display();
 
  drawSprites();
}

function mouseDragged() {

  if(gs === "bob1") {
      Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY});
  }

  if(gs === "bob2") {
      Matter.Body.setPosition(b2.body,{x:mouseX,y:mouseY});
  }

  if(gs === "bob3") {
      Matter.Body.setPosition(b3.body,{x:mouseX,y:mouseY});
  }

  if(gs === "bob4") {
      Matter.Body.setPosition(b4.body,{x:mouseX,y:mouseY});
  }

  if(gs === "bob5") {
      Matter.Body.setPosition(b5.body,{x:mouseX,y:mouseY});
  }

}

function keyPressed() {

  if(keyCode === 49) {
    gs = "bob1";
  }

  if(keyCode === 50) {
    gs = "bob2";
  }

  if(keyCode === 51) {
    gs = "bob3";
  }

  if(keyCode === 52) {
    gs = "bob4";
  }

  if(keyCode === 53) {
    gs = "bob5";
  }

}
