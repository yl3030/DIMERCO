// 長寬定義
var pn_width = $("#peopleNum").width();
var pn_height = $("#peopleNum").height();
var pn_margin = { left: 35, right: 30, top: 10, bottom: 20 };
var PNwidth = pn_width - pn_margin.left - pn_margin.right;
var PNheight = pn_height - pn_margin.bottom - pn_margin.top;

// 資料
var PNdata = [
  { date: "2020/10", num: 20 },
  { date: "2020/11", num: 25 },
  { date: "2020/12", num: 40 },
  { date: "2021/01", num: 39 },
  { date: "2021/02", num: 45 },
  { date: "2021/03", num: 50 },
];

//   圖表定義
var PNsvg = d3
  .select("#peopleNum")
  .attr("width", pn_width)
  .attr("height", pn_height);

// 背景色塊
PNsvg
  .append("rect")
  .attr("width", PNwidth / 10)
  .attr("height", PNheight)
  .attr("fill", "#F7F7F9")
  .attr("transform", "translate(" + pn_margin.left + "," + pn_margin.top + ")");
var bg_position2 = pn_margin.left + PNwidth * 0.3;
PNsvg
  .append("rect")
  .attr("width", PNwidth / 5)
  .attr("height", PNheight)
  .attr("fill", "#F7F7F9")
  .attr("transform", "translate(" + bg_position2 + "," + pn_margin.top + ")");
var bg_position3 = pn_margin.left + PNwidth * 0.7;
PNsvg
  .append("rect")
  .attr("width", PNwidth / 5)
  .attr("height", PNheight)
  .attr("fill", "#F7F7F9")
  .attr("transform", "translate(" + bg_position3 + "," + pn_margin.top + ")");

// x、y軸定義
var PNx = d3.scaleTime().rangeRound([0, PNwidth]);
var PNx_axis = d3.axisBottom(PNx);
var PNy = d3.scaleLinear().rangeRound([PNheight, 0]);
var PNy_axis = d3.axisBottom(PNy);
var xFormat = "%Y/%m";
var parseTime = d3.timeParse("%Y/%m");

//   x、y軸範圍
PNx.domain(
  d3.extent(PNdata, function (d) {
    return parseTime(d.date);
  })
);
PNy.domain([0, 60]);

//   折線定義
var line = d3
  .line()
  .x(function (d) {
    return PNx(parseTime(d.date));
  })
  .y(function (d) {
    return PNy(d.num);
  });

// 圖表位置
var PNg = PNsvg
  .append("g")
  .attr("transform", "translate(" + pn_margin.left + "," + pn_margin.top + ")");

// 圖表設定
PNg.append("path")
  .datum(PNdata)
  .attr("class", "line")
  .style("stroke", "#6E9FEE")
  .style("stroke-width", "3px")
  .attr("d", line);
PNsvg.select(".line").style("fill", "none");

// Add the X Axis
PNg.append("g")
  .attr("transform", "translate(0," + PNheight + ")")
  .attr("fill", "#4E4E4E")
  .style("font-size", "12px")
  .call(d3.axisBottom(PNx).tickFormat(d3.timeFormat(xFormat)))
  .attr("class", "xAxis")
  .selectAll(".tick")
  .select("line")
  .attr("y2", "0");

  PNsvg
  .select("g")
  .select(".xAxis")
  .select("path")
  .style("stroke","#C5C5C5");

// Add the Y Axis
PNg.append("g")
  .call(d3.axisLeft(PNy).ticks(2))
  .attr("class", "yAxis")
  .selectAll(".tick")
  .select("text")
  .text(function (d) {
    return d + "人";
  });

PNsvg
  .select("g")
  .select(".yAxis")
  .selectAll(".tick")
  .select("line")
  .attr("x2", "0");

  PNsvg
  .select("g")
  .select(".yAxis")
  .select("path")
  .style("stroke","#C5C5C5");
  

// 點設定
PNsvg
  .selectAll("myCircles")
  .data(PNdata)
  .enter()
  .append("circle")
  .attr("fill", "#6E9FEE")
  .attr("stroke", "none")
  .attr("cx", function (d) {
    return PNx(parseTime(d.date));
  })
  .attr("cy", function (d) {
    return PNy(d.num);
  })
  .attr("r", 6)
  .attr("transform", "translate(" + pn_margin.left + "," + pn_margin.top + ")");
