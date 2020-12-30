snap="";
function preload(){
    snap=loadImage("plates.jpg")
}
function setup(){
    canvas=createCanvas(540,500);
    canvas.center();
    
}
function draw(){
    image(snap,0,0,550,510);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("PLATE",120,90)
    rect(100,70,300,400);

    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("CUTLERY",400,90)
    rect(370,70,150,400);
    
    
    
}
function back5(){
    window.location="home.html";
}