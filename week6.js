
let spaceX = 20, spaceY = 20, diam= 10;
let value1 = '#75B09CCC';
let value2 = '#37342FCC';
let value3 = '#211F1C';


function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

//reverse colours on click
function mouseClicked() {
  if (value1 === '#75B09CCC') {
    value1 = '#37342FCC';
    value2 = '#97C3B5CC';
    value3 ='#7DB5A3';

  } else {
    value1 = '#75B09CCC';
    value2 = '#37342FCC';
    value3 = '#211F1C';

  }
}

function draw(){
  background(value3);
  //CLICK text
  fill(value2);
  textSize(300);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text('CLICK', windowWidth / 2, windowHeight / 2);

  //particle spacing
  for (let x = 20; x < width; x += spaceX){
    for (let y = 20; y < height; y += spaceY){

      //interactive particle radius
      let d = dist(mouseX, mouseY, x, y);
      if (d < 100){
        //change colour & size
        fill(value1);
        //decrease particle radius as distance from mouse increases
        diam = map(d, 0, 100, 50, 1);

      } else{
        fill(value2);
        diam = 10;
      }

      ellipse(x, y, diam);
    }
  }
}
