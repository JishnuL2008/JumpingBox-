var canvas;
var music,musicS;
var box1,box2,box3,box4,box;
var topEdge,bottomEdge,rightEdge,leftEdge,Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 box1=createSprite(100,585,175,20);
 box1.shapeColor="blue";
 box2=createSprite(300,585,175,20);
 box2.shapeColor="orange";
 box3=createSprite(500,585,175,20);
 box3.shapeColor="red";
 box4=createSprite(700,585,175,20);
 box4.shapeColor="green";

    //create box sprite and give velocity
    box=createSprite(random(20,750),100,50,50);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges=createEdgeSprites();
    //box.bounceOff(box2);
    //box.bounceOff(box3);
    //box.bounceOff(box1);
    //box.bounceOff(box4);
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box

    if(box1.isTouching(box)&&box.bounceOff(box1)){
        box.shapeColor="blue";
        music.play();
    }

    if(box2.isTouching(box)&&box.bounceOff(box2)){
        box.shapeColor="orange";
        
   }

   if(box3.isTouching(box)&&box.bounceOff(box3)){
    box.shapeColor="red";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
        }
    
    if(box4.isTouching(box)&&box.bounceOff(box4)){
         box.shapeColor="green";
         
        }
    drawSprites();
}
