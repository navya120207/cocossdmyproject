photo="";
function preload(){
    photo=loadImage("bottles.jpg")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    
}
function draw(){
    image(photo,0,0,600,520);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("BOTTLES",30,50)
    rect(15,30,600,400);
    
    
}
function back4(){
    window.location="home.html";
}