var canvas;
var gameState = 0;
var nameCount;


var database;
var form,name,store1;

function setup() {
  createCanvas(400,400);
  database = firebase.database();
  store1 = new store();
  store1.getState();
  store1.start();

}

function draw() {
  background(255,0,0);  





  drawSprites();
}