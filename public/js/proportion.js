var dataset1 = [
  {
    x: 4.12,
    y: 3.26,
    name: "聯電",
  },
  {
    x: 7.33,
    y: 8.6,
    name: "中油",
  },
  {
    x: 10.17,
    y: 4.12,
    name: "大立光",
  },
  {
    x: 17.1,
    y: 2.3,
    name: "台積電",
  },
  {
    x: 18.52,
    y: 5.4,
    name: "中鋼",
  },
  {
    x: 18.8,
    y: 7.19,
    name: "中菲",
  },
  {
    x: 23.76,
    y: 1.3,
    name: "台泥",
  },
];
var svg = d3.select("#proportionReport"),
  margin_x = 55,
  margin_y = 80,
  p_width = $("#proportionReport").width();
p_height = $("#proportionReport").height();
(width = p_width - margin_x), (height = p_height - margin_y);

var xScale = d3.scaleLinear().domain([0, 25]).range([0, width]),
  yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);

var g = svg.append("g").attr("transform", "translate(" + 55 + "," + 30 + ")");

svg
  .append("text")
  .attr("x", width / 2 + 100)
  .attr("y", height - 15 + 80)
  .attr("text-anchor", "middle")
  .style("font-family", "微軟正黑體")
  .style("font-size", 12)
  .style("color", "#4E4E4E")
  .text("比重");

svg
  .append("text")
  .attr("text-anchor", "middle")
  .attr("transform", "translate(20," + height / 2 + ")rotate(-90)")
  .style("font-family", "微軟正黑體")
  .style("font-size", 12)
  .style("color", "#4E4E4E")
  .text("投資報酬率");

g.append("g")
  .attr("transform", "translate(0," + height + ")")
  .style("color", "#4E4E4E")
  .style("font-size", "12px")
  .call(d3.axisBottom(xScale));

g.append("g")
  .style("color", "#4E4E4E")
  .style("font-size", "12px")
  .call(d3.axisLeft(yScale));

svg
  .select("g")
  .selectAll("g")
  .select("text")
  .text(function (d) {
    return d + "%";
  });
svg
  .select("g")
  .select("g")
  .selectAll("g")
  .select("text")
  .text(function (d) {
    return d + "%";
  });
svg
  .selectAll("dot")
  .data(dataset1)
  .enter()
  .append("circle")
  .attr("cx", (d) => {
    return xScale(d.x);
  })
  .attr("cy", (d) => {
    return yScale(d.y);
  })
  .attr("r", 5)
  .attr("transform", "translate(" + 55 + "," + 30 + ")")
  .style("fill", "#F39A34");

svg
  .selectAll("dot")
  .data(dataset1)
  .enter()
  .append("text")
  .attr("dx", (d) => {
    return xScale(d.x) - 100;
  })
  .attr("dy", (d) => {
    return yScale(d.y) + 25;
  })
  .text(function (d) {
    return d.name + " (" + d.x + "%, " + d.y + "%)";
  })
  .attr("font-size", "13px")
  .attr("transform", "translate(" + 55 + "," + 30 + ")");
