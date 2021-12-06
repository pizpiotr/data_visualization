
// set the dimensions and margins of the graph
const margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 960 - margin.left - margin.right,
    height = 960 - margin.top - margin.bottom,
    innerRadius = 200,
    scaling_factor = 3,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object to the body of the page
const svg = d3.select("#d3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${width/2},${height/2})`); // Add 100 on Y translation, cause upper bars are longer



d3.json("test.json").then( function(data) {


    let simplifiedData = data.map((d) => {
        console.log(d["data"]);
        let tempData = {
            daten: d["data"], 
            cities: d["city"],
          };
        return tempData;
      });
      
    for(let i=0; i<5; i++){
      console.log(simplifiedData[i].cities);
    }
      svg
      .append('svg')
      .enter()
      .selectAll('circle')
      .data(simplifiedData)
     



});

