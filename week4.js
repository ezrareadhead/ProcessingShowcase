/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  yeti();
  fill('#7161EF');
  noStroke();
  textSize(200);
  textFont('Reem Kufi Fun');
  text('e t i', windowWidth / 3, (windowHeight / 3) * 2);
}


//Custom shape for yeti illustration
function yeti() {
  noStroke();


  //white
  fill('#FFEBFF');
  rect(175, 500, 100, 320, 0, 0, 50, 50);
  rect(325, 500, 100, 320, 0, 0, 50, 50);
  rect(200, 280, 200, 425, 50);
  triangle(201, 320, 200, 520, 175, 507);
  triangle(399, 320, 425, 515, 275, 507);

  triangle(50, 250, 150, 250, 200, 600);
  triangle(450, 250, 550, 250, 400, 600);

  //darker purple
  fill('#5047C2');
  circle(100, 250, 100);
  circle(75, 230, 50);
  circle(100, 220, 50);
  circle(125, 230, 50);

  circle(500, 250, 100);
  circle(475, 230, 50);
  circle(500, 220, 50);
  circle(525, 230, 50);

  // purple
  fill('#7161EF');
  square(200, 300, 200, 75);

  ellipse(125, 250, 60, 30)
  ellipse(475, 250, 60, 30)

  circle(175, 800, 50);
  circle(200, 800, 50);
  circle(225, 800, 50);

  circle(375, 800, 50);
  circle(400, 800, 50);
  circle(425, 800, 50);

  //black
  fill('#211F1C');
  stroke('#211F1C');
  strokeWeight(10);
  ellipse(250, 380, 10, 50);
  ellipse(350, 380, 10, 50);

  fill('#FFEBFF')
  beginShape();
  vertex(250, 450);
  bezierVertex(250,450,350, 425, 325, 475);
  bezierVertex(325,475,320, 450, 250, 450);
  endShape();
}
