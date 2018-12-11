var width = 1400;
var height = 800;
var svg = d3.select("body")
  .append("svg")
  .style("background-color", "#f2f2f2")   
  .attr("width", width)
  .attr("height", height);

var nodes = [
  { id: "NPS", title: "NPS", color: "dodgerblue", size:40},
  
{ id: "UX", title: "UX", color: "tomato", size: 68},
{ id: "Adaptability", color: "orange", size: 3},
{ id: "Simplify", color: "orange", size: 13},
{  id: "More User Friendly", color: "orange", size: 27, label: "More User Friendly"},
{id: "Not Intuitive", color: "orange", size: 5, label: "Not Intuitive"},
{id: "Navigation", color: "orange", size: 2, label: "Navigation"},
{id: "Amend Sent Invocies", color: "orange", size: 3, label: "Amend Sent Invoices"},
{id: "External System Integration", color: "orange", size: 5, label: "External System Integration"},
{id: "Invoice Format", color: "orange", size: 5, label: "Invoice Format"},
{id: "Set Up Account", color: "orange", size: 5, label: "Set Up Account"},
{  id: "General UX", color: "orange", size: 5, label: "General UX"},
{  id: "Invoice Templates", color: "yellow", size: 4, label: "Invoice Templates"},
{  id: "Issuing Invoices", color: "yellow", size: 3, label: "Issuing Invoices"},
{  id: "Credit Notes", color: "yellow", size: 2, label: "Credit Notes"},
{  id: "Search", color: "orange", size: 2, label: "Search"},



{ id: "Support", title: "Support", color: "darkcyan", size: 30, label: "Support"},
{ id: "Live Support", color: "lightseagreen", size: 11, label: "Live Support"},
{ id: "Poor Support", color: "lightseagreen", size: 7, label: "Poor Support"},
{ id: "No Support", color: "lightseagreen", size: 4, label: "No Support"},
{ id: "Guidance", color: "lightseagreen", size: 2, label: "Guidance"},
{ id: "Slow Support", color: "lightseagreen", size: 2, label: "Slow Support"},
{ id: "Set Up Support", color: "mediumseagreen", size: 2, label: "Set Up Support"},

{ id: "Performance", title: "Performance", color: "mediumvioletred", size: 13, label: "Performance"},
{ id: "Speed", color: "rosybrown", size: 7, label: "Speed"},
{ id: "Updates", color: "rosybrown", size: 2, label: "Updates"},
{ id: "PO's", color: "rosybrown", size: 2, label: "PO's"},
{ id: "PO Issue1", color: "pink", size: 2, label: "System doesn't recognise PO numbers"},
{ id: "PO Issue2", color: "pink", size: 2, label: "POs stopped being visible in Tradeshift about two months after we'd started using it."},

{ id: "Delayed Payment", color: "darkslateblue", size: 13, label: "Delayed Payment"},


{ id: "Efficiency", title: "Efficiency",color: "darkslategray", size: 36},
{ id: "Duplication Of Work", color: "slategray", size: 10, label: "Duplication Of Work"},
{ id: "Transparency", color: "slategray", size: 4, label: "Transparency of invoice process after sending"},
{ id: "Time Consuming", color: "slategray", size: 5, label: "Time Consuming"},
{ id: "Batch Invoicing", color: "slategray", size: 3, label: "Batch Invoicing"},
{ id: "Long Set Up", color: "slategray", size: 3, label: "Long Set Up"},
{ id: "Unecessary Step", color: "slategray", size: 1, label: "Unecessary Step"},
{ id: "Misreads Uploads", color: "slategray", size: 1, label: "Misreads Uploads"},

{ id: "Customer Centric", title: "Customer Centric", color: "royalblue", size: 12, label: "Customer Centric"},
{ id: "Increased Burden", color: "blue", size: 8, label: "Increased Burden"},
{ id: "Customer Dependant", color: "blue", size: 2, label: "Dependant on customer behaviour"},
{ id: "Not Useful", color: "blue", size: 1, label: "Not useful for supplier"},
{ id: "Access", color: "blue", size: 1, label: "No access for single traders"},

{ id: "Communication", title: "Communication", color: "red", size: 15, label: "Communication"},
{ id: "Collaboration", color: "orange", size: 4, label: "Collaboration"},
{ id: "Jargon", color: "orange", size: 3, label: "Small businesses do not have the technical staff to understand some of the language"},
{ id: "Language", color: "orange", size: 2, label: "Language"}
];

var links = [
  { source: "NPS", target: "Support"},
  { source: "NPS", target: "UX"},
  { source: "NPS", target: "Performance"},
  { source: "NPS", target: "Delayed Payment"},
  { source: "NPS", target: "Efficiency"},
  { source: "NPS", target: "Customer Centric"},
  { source: "NPS", target: "Communication"},

{ source: "UX", target: "Adaptability"},
{ source: "UX", target: "Simplify"},
{ source: "UX", target: "More User Friendly"},
{ source: "UX", target: "Not Intuitive"},
{ source: "UX", target: "Navigation"},
{ source: "UX", target: "Amend Sent Invocies"},
{ source: "UX", target: "External System Integration"},
{ source: "UX", target: "Time Consuming"},
{ source: "UX", target: "Invoice Format"},
{ source: "UX", target: "Set Up Account"},
{ source: "UX", target: "General UX"},
{ source: "UX", target: "Search"},
{ source: "Adaptability", target: "Invoice Templates"},
{ source: "Simplify", target: "Issuing Invoices"},
{ source: "Simplify", target: "Credit Notes"},


{ source: "Support", target: "Live Support"},
{ source: "Support", target: "Poor Support"},
{ source: "Support", target: "No Support"},
{ source: "Support", target: "Guidance"},
{ source: "Support", target: "Slow Support"},
{ source: "Poor Support", target: "Set Up Support"},
{ source: "Set Up Account", target: "Set Up Support"},

{ source: "Performance", target: "Speed"},
{ source: "Performance", target: "Updates"},
{ source: "Performance", target: "PO's"},
{ source: "PO's", target: "PO Issue1"},
{ source: "PO's", target: "PO Issue2"},

{ source: "Efficiency", target: "Duplication Of Work"},
{ source: "Efficiency", target: "Transparency"},
{ source: "Efficiency", target: "Time Consuming"},
{ source: "Efficiency", target: "Batch Invoicing"},
{ source: "Efficiency", target: "Long Set Up"},
{ source: "Efficiency", target: "Unecessary Step"},
{ source: "Efficiency", target: "Misreads Uploads"},
{ source: "Performance", target: "Misreads Uploads"},
{ source: "Duplication Of Work", target: "Misreads Uploads"},

{ source: "Customer Centric", target: "Increased Burden"},
{ source: "Customer Centric", target: "Customer Dependant"},
{ source: "Customer Centric", target: "Not Useful"},
{ source: "Customer Centric", target: "Access"},

{ source: "Communication", target: "Collaboration"},
{ source: "Communication", target: "Jargon"},
{ source: "Communication", target: "Language"}
];

var tooltip = d3.select("body")
	.append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);


var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function(d) { return d.id; }))
  .force("charge", d3.forceManyBody().strength(-100))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collide", d3.forceCollide().radius(function(d) { return d.size; }));


var linkSelection = svg.append("g")
    .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter().append("line")
    .attr("stroke", "#3b3b3b")
    .attr("stroke-width", 0.5);

var node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("g")
  .data(nodes)
  .enter().append("g");


var circles = node.append("circle") //circle is created within each node group
  .attr("r", function(d){ return d.size})
  .attr("fill", function(d){ return d.color })
 
  .on('mouseover.tooltip', function(d) {
    tooltip.transition()
      .duration(300)
      .style("opacity", .8);
    tooltip.html(d.label)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY + 10) + "px");
  })
  
.on('mouseover.fade', fade(0.1))
.on("mouseout.tooltip", function() {
    tooltip.transition()
      .duration(100)
      .style("opacity", 0);
  })
.on('mouseout.fade', fade(1))
  .on("mousemove", function() {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY + 10) + "px");
  })
  
.on('dblclick',releasenode)

  .call(d3.drag()
    .on("start", dragStart)
    .on("drag", drag)
    //.on("end", dragEnd)
    
    ); 

 



  var lables = node.append("text")
  .attr("text-anchor", "middle")
    .text(function(d) {
      return d.title;
    });
  
 

  simulation
    .nodes(nodes)
    .on("tick", ticked);

  simulation.force("link")
    .links(links)
    .distance(function(d) {return (d.source.size + d.target.size) * 1.5});


  function ticked() {
    linkSelection
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    node
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      })
  }


  function dragStart(d) {
    console.log("start dragging");
    simulation.alphaTarget(0.5).restart();
  
    d.fx = d3.x;
    d.fy = d3.y;
  }
  function drag(d) {
    console.log("dragging");
      d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  function dragEnd(d) {
    console.log("done dragging");
    simulation.alphaTarget(0);
  
    d.fx = null;
    d.fy = null;
  };


  function isConnected(a, b) {
    return linkedByIndex[`${a.index},${b.index}`] || linkedByIndex[`${b.index},${a.index}`] || a.index === b.index;
  }

  function fade(opacity) {
    return d => {
      node.style('stroke-opacity', function (o) {
        const thisOpacity = isConnected(d, o) ? 1 : opacity;
        this.setAttribute('fill-opacity', thisOpacity);
        return thisOpacity;
      });

      link.style('stroke-opacity', o => (o.source === d || o.target === d ? 1 : opacity));

    };
  }
  var sequentialScale = d3.scaleOrdinal(d3.schemeSet3)
  .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  function releasenode(d) {
    d.fx = null;
    d.fy = null;
}
  
 

/*var linkSelection = svg.selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", "#3b3b3b" )
  .attr("stroke-width", 0.5 )*/

/*var nodeSelection = svg.selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r", function(d){ return d.size })
  .attr("fill", function(d){ return d.color })
  .call(d3.drag()
  .on("start", dragStart)
  .on("drag", drag)
  .on("end", dragEnd)); */

/*var lables = nodeSelection.append("text")
  .text(function(d) {
    return d.id;
  })
  .attr('x', 6)
  .attr('y', 3);

nodeSelection.append("title")
  .text(function(d) { return d.id; });*/

// var simulation = d3.forceSimulation(nodes);

// simulation
//   .force("center", d3.forceCenter(width / 2, height / 2))
//   .force("nodes", d3.forceManyBody())
//   .force("links", d3.forceLink(links)
//   .id(function(d){return d.id})

//    //.distance(300))
//    .distance(function(d){
//     return (d.source.size + d.target.size) * 1.5
//    }))
// .on("tick", function(){
//   simulation.alpha(1)
// node
//   .attr("cx", function(d){ return d.x })
//   .attr("cy", function(d){ return d.y });

// linkSelection
// .attr("x1", function(d){ return d.source.x})
//   .attr("y1", function(d){ return d.source.y}) 
//   .attr("x2", function(d){ return d.target.x}) 
//   .attr("y2", function(d){ return d.target.y}) 
// })

