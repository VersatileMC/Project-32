const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

var block10,block12,block13,block14,block15,block16;

var polygon;

var slingShot;

var ballIMG;

var bg = "day.jpg";

var score = 0;

var backgroundImg
function preload(){
  ballIMG = loadImage("ball.png");
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,350,230,15);
  
  //creating Blocks
  block1 = new Box(220,325,30,40);
  block2 = new Box(250,325,30,40);
  block3 = new Box(270,325,30,40);
  block4 = new Box(300,325,30,40);
  block5 = new Box(330,325,30,40);
  block6 = new Box(360,325,30,40);
  block7 = new Box(390,325,30,40);

  //level 2
  block8 = new Box(245,285,30,40);
  block9 = new Box(275,285,30,40);
  block10 = new Box(305,285,30,40);
  block11 = new Box(335,285,30,40);
  block12 = new Box(365,285,30,40);

  //level 3
  block13 = new Box(275,245,30,40);
  block14 = new Box(305,245,30,40);
  block15 = new Box(335,245,30,40);

  //Top
  block16 = new Box(305,205,30,40);

  //polygon holder with slings
  var options = {
    density: 1.0
  }



  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  if(backgroundImg) {
    background(backgroundImg);
  }

  Engine.update(engine);

  ground.display();

  

  fill("#86cde9");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //level 2
  fill("#febfca");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //level 3
  fill("#3edfcf");
  block13.display();
  block14.display();
  block15.display();

  //Top
  fill("#7f7f7f");
  block16.display();

  // Calling the score() function for each object
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  fill("#f7d803")
  stroke(3)
  textSize(20)
  text("SCORE : "+score,610,370);

  imageMode(CENTER)
  image(ballIMG,polygon.position.x,polygon.position.y,40,40);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}        

function keyPressed() {
  if(keyCode == 32){
    slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "day.jpg";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
}
