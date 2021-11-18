console.log('Loading...');

let table;
let klarheit;



const canvasWidth = 1500 ;
const canvasHeight = 900;

// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
  klarheit = loadFont('assets/ESKlarheitKurrentTRIAL-Regular.otf');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));
  textSize(20);
}

function draw() {
  translate(windowWidth/2, windowHeight/2); 
  push();
  angleMode(DEGREES);
  rotate(-9);
  writeText();
  drawLines_fut();
  drawCircles();
  drawLines();
  
  pop();
  description();  
  console.log(klarheit);
  noLoop();
}
function drawCircles(){
  for(let i = 0; i<200; i++){
    push();
    circle(0,0,i);
    pop();
  }
}
function drawLines(){

let circSegs = table.getRowCount();
circSegs = 40;
  for(let i=0; i<circSegs; i++){

    let meanTemp = table.get(i, 'Annual_Mean_Temperature');
    var lineLength = map(meanTemp,2,25,30,250);
    
    

    angleMode(DEGREES);
    rotate(360/circSegs);
    var posX = lineLength;
    var posY = lineLength;
    line(0, 0, posX, posY);
    fill(0,0,0);
    circle(posX,posY,20);
  }

  }

function drawLines_fut(){

    let circSegs = table.getRowCount();
    circSegs = 40;
      for(let i=0; i<circSegs; i++){
        
        let futmeanTemp = table.get(i, 'future_Annual_Mean_Temperature');
        var lineLength = map(futmeanTemp,2,25,30,250);
        
    
        angleMode(DEGREES);
        rotate(360/circSegs);
        var pos = createVector(lineLength,lineLength);
        //var posY = lineLength;
        fill(255,111,97);
        stroke(0,0,0);
        line(0, 0, pos.x, pos.y);
        noStroke();
        circle(pos.x,pos.y,20);
      }
       noStroke();
      fill(245,223,77);
      circle(0,0,100);
      }

function writeText(){
  
  let RowC = table.getRowCount();
  RowC = 40;
  
  for( let i=0; i < RowC; i++){
   

    let meanTemp = table.get(i, 'future_Annual_Mean_Temperature');
    let meanactTemp = table.get(i, 'Annual_Mean_Temperature');
    var citName = table.get(i, 'current_city');
    
    var lineLength = map(meanTemp,2,25,30,250);
    var pos = createVector(lineLength*1.5,lineLength*1.5);

    angleMode(DEGREES);
    
    
    
    
    rotate(360/RowC);
    stroke(0,0,0);
    line(0, 0, pos.x, pos.y);
    push();
    translate(pos.x, pos.y);
    rotate(i*(-360/RowC));
    
    textFont(klarheit);
    textSize(20);
    fill(0,0,0);
    text(citName,0,0); 
    
    pop();
    console.log(pos);
  
  }
  
}
  



function description(){
  
  textFont(klarheit);
  textSize(20);
 
  fill(0,0,0);
  text('Annual Mean Temperature', -500,300);
  circle(-520, 292, 20);

 
  
  fill(0,0,0);
  text('Future Annual Mean Temperature', -500,330);
  fill(255,111,97);
  noStroke();
  circle(-520, 322, 20);
  angleMode(DEGREES);
  
}