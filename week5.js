/*
    Paste the code for your week 5 exercise below.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(30);
  y1 = 0;
  y2 = 0;
  x = 0;
}

function draw() {
  background('#211F1C');
  noFill();
  stroke('#7161EFCC');

  //center
  translate(width / 2, height  / 2);

  //sin wave rectangle animation
  for (var i = 0; i < 100; i++) {
    //save settings
    push();
    rotate(sin(frameCount + i) * 150);
    stroke('#7DB5A3CC');
    rect(0, 0, 700 - i * 4, 700 - i * 4, 100 - i);
    //restore settings
    pop();
  }

  //circle animation
  noStroke();
  fill('#7161EFCC');
  ellipse(x - windowWidth/3, y1 + windowHeight/2, 100);
  //motion
  y1 = y1 - 3;
  //loop
  if (y1 < - (windowHeight + 50)){
    y1 = 50;
  }

  ellipse(x + windowWidth/3, y2 - windowHeight/2, 100);
  //motion
  y2 = y2 + 3;
  //loop
  if (y2 > windowHeight + 50){
    y2 = -50;
  }
}
