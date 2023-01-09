var box
function setup() {
  createCanvas(1000,500);
  box = createSprite(200,200,100,100)
  console.log('hello')
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
   box.position.x=box.position.x+5 
  }
drawSprites()
}




