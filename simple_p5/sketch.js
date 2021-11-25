
let radius_1;
let radius_2;
let radius_3;
let difference;


function setup() 
{
	createCanvas(1000, 800);
    background(15,76,129);
    textAlign(CENTER);
    textSize(20);
}

function draw()
{
    translate(width/2, height/2);

    let pop_1 = 15000;
    let co2_1 = 4.3;
    let scale = 50;
    radius_1 = forest_circling(pop_1,co2_1) * scale;

    console.log(radius_1);
    
    fill(0,148,115);
    circle(0,0,radius_1);

    fill(255,255,255);
    text('Waldfläche', 0, radius_1/2 - 20);
    
    radius_2 = 1.4 * scale;
    fill(255,255,255);
    circle(0,0,radius_2);

    difference = radius_1/radius_2;
    difference = difference * difference;

    fill(255,255,255);
    
    text('difference: ' + difference, 0, 70);

    noLoop();
}

function forest_circling(population,co2_average){

    let forest_ha = 6;

    value = co2_average*population;
    value = value / forest_ha;
    value = value / 100;
    x = value / PI;
    radius = sqrt(x);
    radius = radius *2;
    console.log(radius);
    return radius;
}