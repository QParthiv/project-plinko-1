const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(480, 800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255, 255, 255);


  ground = new Ground(240, 775, 480, 20);


  drawSprites();
}