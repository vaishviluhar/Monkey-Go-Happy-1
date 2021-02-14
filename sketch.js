var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage, obstacleF;
var FoodGroup, obstacleGroup;
var score;
var food;
var survivalTime = 0;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
  background("white");

  stroke("white");
  textSize(20);
  fill("white");

  stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time :" + survivalTime, 100, 50);

  score = score + Math.round(frameRate() / 60);

  if (keyDown("space")) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);

  food();
  obstacleF();

  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 250, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -5;

    banana.addImage("banana", bananaImage);
    banana.scale = 0.05;
    banana.lifetime = 100;

    FoodGroup.add(banana);
  }
}

function obstacleF() {
  if (frameCount % 200 === 0) {
    obstacle = createSprite(600, 320, 10, 40)

    obstacle.velocityX = -6
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15

    obstacle.lifetime = 100;

    obstacleGroup.add(obstacle);
  }
}





