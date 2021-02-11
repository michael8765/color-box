var canvas;
var music;
var leftWall, rightWall, bottomWall, topWall
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
  
    bottomWall = createSprite(300,390,600,20)
    bottomWall.shapeColor="blue"

    rightWall = createSprite(10,300,20,600)
    rightWall.shapeColor="red"

    leftWall = createSprite(390,300,20,600)
    leftWall.shapeColor="green"

    topWall = createSprite(200,10,400,20)
    topWall.shapeColor="brown"

    box = createSprite(200,200,20,20)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(topWall)
    box.bounceOff(bottomWall)
    box.bounceOff(rightWall)
    box.bounceOff(leftWall)
    box.velocityX=7
    box.velocityY=8
    if(box.isTouching(topWall)){
      box.shapeColor="brown"
    }
    if(box.isTouching(bottomWall)){
        box.shapeColor="blue"
    }
    if(box.isTouching(rightWall)){
        box.shapeColor="red"
    }
    if(box.isTouching(leftWall)){
        box.shapeColor="green"
    }
    //add condition to check if box touching surface and make it box

    drawSprites()
}
