var thickness,wall;

var bullet,speed,weight;

function setup() {
  createCanvas(1600, 400);

speed=random(223,231)
weight=random(30,52)
thickness=random(22,83)

  bullet=createSprite(50,200,50,50);

 

  bullet.velocityX = speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,90,80)
}

function draw()  {
  background(wite);

  if(hasCollided(bullet , wall))  {
    bullet.velocityX=0;
     var ddmage=0.5 * bulletweight * bulletspeed * bulletspeed/(thickness * thickness * thickness)
    if (damage>10) 
    {
      wall.shapeColor="red";
    }

    if (deformation<10) 
    {
      wall.shapeColor="green";
    }

  }

  drawSprites();
}


function hasCollided(bullet, wall)
{ bulletRightEdge = bullet.x + bullet.width;
  walleftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
