const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polyImage;
var slingshot;

function preload(){
polyImage=loadImage("p.png");
}


function setup() {
  var canvas= createCanvas(1200,1000);
  engine = Engine.create();
  world = engine.world;


  polygon=Bodies.circle(100,800,20);
  World.add(world,polygon);

  slingshot=new Slingshot(polygon.body,{x:100,y:750});

  block1=new Box(400,715)
  block2=new Box(455,715)
  block3=new Box(510,715)
  block4=new Box(565,715)
  block5=new Box(620,715)
  block6=new Box(345,715)
  block7=new Box(675,715)
  block8=new Box(372,660)
  block9=new Box(427,660)
  block10=new Box(482,660)
  block11=new Box(537,660)
  block12=new Box(592,660)
  block13=new Box(647,660)
  block14=new Box(399,605)
  block15=new Box(454,605)
  block16=new Box(509,605)
  block17=new Box(564,605)
  block18=new Box(619,605)
  block19=new Box(426,550)
  block20=new Box(481,550)
  block21=new Box(536,550)
  block22=new Box(591,550)
  block23=new Box(453,495)
  block24=new Box(508,495)
  block25=new Box(563,495)
  block26=new Box(480,440)
  block27=new Box(535,440)
  block28=new Box(507,385)

  block29=new Box(780,460)
  block30=new Box(835,460)
  block31=new Box(890,460)
  block32=new Box(945,460)
  block33=new Box(1000,460)
  block34=new Box(807,405)
  block35=new Box(862,405)
  block36=new Box(917,405)
  block37=new Box(972,405)
  block38=new Box(834,350)
  block39=new Box(889,350)
  block40=new Box(944,350)
  block41=new Box(861,295)
  block42=new Box(916,295)
  block43=new Box(861,295)
  block44=new Box(888,240)

  ground=new Ground(600,985,1200,30);

  stand1=new Ground(505,750,450,20);

  stand2=new Ground(900,500,350,20);

}

function draw() {
  //Engine.update(engine);  
  background(255);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();

  //imageMode(CENTER);
  //image=(polyImage,polygon.position.x,polygon.position.y,40,40);
  //polygon.display();
  ellipseMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,20,20);
  
  ground.display();
  stand1.display();
  stand2.display();
  slingshot.display();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY}); 
} 

function mouseReleased(){
  slingshot.fly(); 
}