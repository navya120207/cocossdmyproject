picture="";
function preload(){
    picture=loadImage("desk.jpg")
}
function setup(){
    canvas=createCanvas(580,480);
    canvas.center();
    
}
function draw(){
    image(picture,0,0,580,480);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("DESK",90,100)
    rect(90,70,400,300);
    
    
}
function back3(){
    window.location="home.html";
}