var ball;

function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,30,30);
  ball.shapeColor="yellow";
}

function draw() 
{
  background("green");
 if(keyIsDown(RIGHT_ARROW))
 {
  ball.position.x=ball.position.x+2
 }
 if(keyIsDown(LEFT_ARROW))
 {
  ball.position.x=ball.position.x-2
 }
  drawSprites();
  


}




