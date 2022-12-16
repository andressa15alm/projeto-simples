var penta;

var bolinha;
var bolinhas;
function setup() {
  createCanvas(400, 400);
  world.gravity.y=10;

  bolinhas= new Group();
  bolinhas.diameter=20;
  bolinha=new bolinhas.Group()
  
  penta=new Sprite(200,200,[200,-72,5]);
  penta.shape='chain';
  penta.collider='fixed';
  penta.rotationSpeed=0.5;
 
}
function draw() {
    background(0);
  

    if(mouse.presses('left')){
      new bolinha.Sprite(mouse.x,mouse.y);
    }
}




