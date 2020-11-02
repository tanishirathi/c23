const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var box1,box2

var engine,world,ground,ground1

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(200,390,390,10)
  ground1=new Ground(600,390,390,15)
  
  box1= new Box(100,200,30,30);
  box2=new Box(200,200,30,30);
}
function draw() {
  background("yellow"); 
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  ground1.display();

 
 
  drawSprites();
}