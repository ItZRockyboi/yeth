img = "";
status =""; 
function setup(){
canvas = createCanvas(600,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
image(img,0,0,600,400);
fill("#1b44fa");
text("desk",230,170);
stroke("#1b44fa");
noFill();
rect(100,150,500,200);

fill("#3d030b");
text("wall",235,15);
stroke("#3d030b");
noFill();
rect(50,5,500,140);
}

function preload(){
img = loadImage("oooooo.jpg")
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
