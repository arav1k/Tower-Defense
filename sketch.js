const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground
var BgImg
var canvas;
var Tower
var TowerImg
var angle,cannon
var canonBall
function preload() {
  BgImg=loadImage('assets/background.gif')
  TowerImg=loadImage('assets/tower.png')
}

function setup() {

  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true


  }
  //this.body=Bodies.circle(a,b,c,options)
  ground=Bodies.rectangle(0,height-1,width*2,1,options)
  World.add(world,ground)
  Tower=Bodies.rectangle(160,350,160,310,options)
  World.add(world,Tower)
  angle=20
  cannon=new Cannon(180,110,130,100,angle)//Cannon Top
  canonBall=new CanonBall(cannon.x,cannon.y)
}

function draw() {
  background('white')
  
  image(BgImg,0,0,1200,600)
  cannon.display()
  canonBall.display()
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1)
  push()
  imageMode(CENTER)
  image(TowerImg,Tower.position.x,Tower.position.y,160,310)
  pop()
    
}
