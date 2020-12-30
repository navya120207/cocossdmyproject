img="";
function preload(){
    img=loadImage("bedroom.jpg")
}
function setup(){
    canvas=createCanvas(540,500);
    canvas.center();
    
}
function draw(){
    image(img,0,0,540,500);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("BED",150,200)
    rect(130,170,350,300);
    
    
}
function back(){
    window.location="home.html";
}