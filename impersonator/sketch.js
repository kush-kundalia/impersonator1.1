var canvas;
var buttonInfo;
var buttonPlay;
var buttonReport;
var discordgg;
function preload(){
buttonInfo=loadImage("images/button_info.png")
buttonPlay=loadImage("images/button_play.png")
buttonReport=loadImage("images/button_report-bug.png")
discordgg=loadImage("images/button_open-discord.png")
}

function setup() {
  canvas = createCanvas(displayWidth-20 , displayHeight-140);
}

function draw() {
  background(0)
  var info = createSprite(displayWidth-850,displayHeight-400,20,20);
  info.addImage(buttonInfo,"info")
  var play = createSprite(displayWidth-600,displayHeight-400,20,20);
  play.addImage(buttonPlay,"play");
  var reportBug = createSprite(displayWidth-850,displayHeight-300,20,20);
  reportBug.addImage(buttonReport,"reportBug");
 var opendiscord = createSprite(displayWidth-600,displayHeight-300,20,20);
 opendiscord.addImage(discordgg,"opendiscord");
  drawSprites();
  welcomeMssgintro();
  infopressed();
}
function welcomeMssgintro(){
  textSize(30);
  textFont("Verdana");
  text("Impersonator",displayWidth/3,displayHeight/6.8);
  textSize(15);
  text("A game of betrayal and trust ",displayWidth/3,displayHeight/5);
  textSize(15);
  text("Tap on info to learn how to play the game",displayWidth/3,displayHeight/4);
}

function infopressed(){
  if(mousePressedOver(info)){
    console.log("true")
  }
}