
var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  wall=createSprite(1500,200,50,50);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
}

function draw() {
background(255,255,255);  
if( hasCollieded (bullet,wall))
{
bullet.velocitiyX=6;
var damage =0.5 * weight * speed* speed/ thickness  * thickness  * thickness ;
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
 {
  wall.shapeColor=color(0,255,0);
 }
}
drawSprites();
}

function hasCollieded (bullet,wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}


