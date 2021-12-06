const donald = d3.select('.donald');

const radius = 20;
const screenheight = 1000;
const screenwidth = 800;

var arraystart = 0;
var arrayend = 30;

var data_array_2 = [];

while(arraystart < arrayend+1){
    data_array_2.push(arraystart++);
}

console.log(data_array_2);


// var data_array = [12,50,100, 70];

var data_array = [
    {cx: 50,r: 50, fill:'yellow'},
    {cx: 150,r: 100, fill:'blue'},
    {cx: 300,r: 150, fill:'red'},
]

const svg = donald.append('svg')
    .attr('width',screenheight )
    .attr('height', screenwidth);


 const circ =svg.selectAll('circle');
 const line =svg.selectAll('line');

 circ.data(data_array)
 .enter().append('circle')
  .attr('cy', (d)=>{return 300 - d.r;})
  .attr('r', (d)=>{return d.r;})
  .attr('cx', (d)=> {return d.cx;})
  .attr('fill', (d)=> {return d.fill;});

 
 line.data(data_array_2)
    .enter().append('line')
    .style('stroke', 'black')
    .style('stroke-weight', 50)
    .attr('x1', 0)
    .attr('y1', 300)
    .attr('x2',700)
    .attr('y2',(d,i) => {return d *i});





