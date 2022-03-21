var form;
var bg, bgImg;

function preload(){
  
  bgImg = loadImage("bg.jpg");
}

function setup(){

  createCanvas(1000, 1000)
  form = new Form();
}

function draw(){
  background(bgImg);
  form.display();
}