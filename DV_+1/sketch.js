console.log('Loading...');


let table;

const canvasWidth = 600;
const canvasHeight = 3000;

//https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));
}

function draw() {
  background('#fae');
  visualize();
}
 
function visualize(){


  let cities = table.getColumn('current_city');

  for(let i = 0; i < table.getRowCount(); i++) {

    console.log('cities[i]', cities[i]);
    
    translate(0,40);
    textSize(32);
    fill(1+i, 3+i*3, 153);
    text(cities[i],10,30);
    
    
  }
  noLoop();
}