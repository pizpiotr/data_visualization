
// set the dimensions and margins of the graph
const margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 960 - margin.left - margin.right,
    height = 960 - margin.top - margin.bottom,
    innerRadius = 200,
    scaling_factor = 0.1,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object to the body of the page
const svg = d3.select("#d3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${width/2},${height/2})`) // Add 100 on Y translation, cause upper bars are longer
 
    




d3.json("test.json").then( function(data) {

    let simplifiedData = data.map((d) => {
        let tempData = {
            city: d["city"],
            daten: d["data"], 
            type: d["datatype"],
          };
          return tempData;
      });
  // X scale
  const x = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing ?
      .domain( data.map(d => d.datatype)); // The domain of the X axis is the list of states.

  // Y scale
  const y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 1000]); // Domain of Y is from 0 to the max seen in the data
     

  // Add bars


  svg.append("g")
    .selectAll("path")
    .data(simplifiedData)
    .join("path")
      .attr("fill", "#69b3a2")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(d => y(d.daten.test_data1 * scaling_factor))
          .startAngle(d => x(d.type))
          .endAngle(d => x(d.type) + x.bandwidth())
          .padAngle(0.5)
          .padRadius(innerRadius))
    

svg.append("g")
    .attr("class","test2")
    .selectAll("path")
    .data(simplifiedData)
    .join("path")
      .attr("fill", "#000000")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
    //   .attr("transform", function(d){
    //       return "rotate(20)";})
          .innerRadius(innerRadius)
          .outerRadius(d => y(d.daten.test_data2 * scaling_factor))
          .startAngle(d => x(d.type))
          .endAngle(d => x(d.type) + x.bandwidth())
          .padAngle(0.5)
          .padRadius(innerRadius))



});

