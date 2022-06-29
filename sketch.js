var bg, bgImg;
var fish, fishImg;
var shark, starfish;
var fishy_bullet;
var game_over_screen;
var ground;

function preload() {
  fishImg = loadImage("images/fishy.png");
  shark = loadImage("images/shark.png");
  starfish = loadImage("images/starfish.png");
  bgImg = loadImage("images/background.png");
  fishy_bullet = loadImage("images/gamingfishy.png");
  game_over_screen = loadImage("images/gameover.png");
}

function setup() {
  createCanvas(962, 181);
  fish = createSprite(10, 100, 30, 10);
  fish.addImage(fishImg);
  fish.scale = 0.27;
}

function draw() {
  background(bgImg);
  if (keyDown("UP_ARROW")) {
    fish.y = fish.y - 5;
  }
  if (keyDown("DOWN_ARROW")) {
    fish.y = fish.y + 5;
  }
  if (keyDown("LEFT_ARROW")) {
    fish.x = fish.x - 5;
  }
  if (keyDown("RIGHT_ARROW")) {
    fish.x = fish.x + 5;
  }
  drawSprites();
}
