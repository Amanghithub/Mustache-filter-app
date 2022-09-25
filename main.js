var nose_x=0;
var nose_y=0;

function preload(){
mustache = loadImage("https://i.postimg.cc/sfJVT6x1/istockphoto-485318064-170667a-removebg-preview.png");
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
camera=createCapture(VIDEO);
camera.size(300 ,300);
camera.hide();

poseNet=ml5.poseNet(camera,modelLoaded);
poseNet.on("pose",getPoses);
}

function draw(){
image(camera,0,0,300,300);
image(mustache,nose_x,nose_y,50,30)
}

classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function take_snapshot(){
    save("filter.png")
}

function modelLoaded(){
    console.log("pose net model loaded");
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log(" nose y = "+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-20;
        nose_y=results[0].pose.nose.y;
    }
}