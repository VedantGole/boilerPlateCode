var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(100, 200, 50, 50);
 movingRect = createSprite(700, 200, 50, 50);

 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "blue";

 fixedRect.velocityX = 4;
 movingRect.velocityX = -4;
 
}

function draw() {
  background(0);  
  
  bounceOff(movingRect, fixedRect);


drawSprites();  
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
  object2.x - object1.x < object2.width/2 + object1.width/2)
{
console.log("here");
   object1.velocityX = -object1.veocityX;
   object2.velocityX = -object2.velocityX;
}


if(object1.y - object2.y < object1.height/2 + object2.height/2 && 
object2.y - object1.y < object2.height/2 + object1.height/2)
{
  console.log("there");
 object1.velocityY = -object1.velocityY;
 object2.velocityY = -object2.velocityY;


}




}




