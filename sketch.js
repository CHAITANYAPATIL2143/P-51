var canvas;
var backgroundImage, bgImg, bike1_img, bike2_img, track
var database, gameState
var form, player, playerCount
var allPlayers, bike1, bike2
var bikes = []

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  bike1_img = loadImage("/assets/bike1.png")
  bike2_img = loadImage("/assets/bike2.png")
  track = loadImage("/assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
   game.update
  }

  if (gameState === 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}