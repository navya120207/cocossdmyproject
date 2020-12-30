pic="";
function preload(){
    pic=loadImage("books.jpg")
}
function setup(){
    canvas=createCanvas(540,500);
    canvas.center();
    
}
function draw(){
    image(pic,0,0,540,500);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("books",70,300);
    textSize(15);
    rect(30,250,500,200);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("pen stand",50,60);
    textSize(20);
    rect(40,40,150,200);
    
    
}
function back2(){
    window.location="home.html";
}