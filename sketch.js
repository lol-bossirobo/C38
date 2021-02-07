var database;
var gameState = 0;
var plCount;
var form,player,game;
var allp ;
var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();

  createCanvas(displayWidth -20,displayHeight -30);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
  if (plCount === 4) {

    game.update(1);



  }

  if (gameState === 1) {

    clear();
    game.play();




  }
  
  drawSprites();
  
}

