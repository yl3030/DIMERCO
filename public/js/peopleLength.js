// 長寬定義
var pl_width = $("#peopleLength").width();
var pl_height = $("#peopleLength").height();
var pl_margin = { left: 35, right: 20, top: 10, bottom: 20 };
var PLwidth = pl_width - pl_margin.left - pl_margin.right;
var PLheight = pl_height - pl_margin.bottom - pl_margin.top;

// 資料
var PLdata = [
  {
    name: "不到1年",
    num: 40,
  },
  {
    name: "1年~2年",
    num: 50,
  },
  {
    name: "2年~3年",
    num: 30,
  },
  {
    name: "3年~4年",
    num: 60,
  },
  {
    name: "4年~5年",
    num: 55,
  },
  {
    name: "5年以上",
    num: 20,
  },
];

//   圖表定義
var PLsvg = d3
  .select("#peopleLength")
  .attr("width", pl_width)
  .attr("height", pl_height);

// x、y軸定義
var pl_xScale = d3.scaleBand().range([0, PLwidth]).padding(0.3),
  pl_yScale = d3.scaleLinear().range([PLheight, 0]);

//   x、y軸範圍
pl_xScale.domain(
  PLdata.map(function (d) {
    return d.name;
  })
);
pl_yScale.domain([0, 60]);

// 圖表位置
var PLg = PLsvg.append("g").attr(
  "transform",
  "translate(" + pl_margin.left + "," + pl_margin.top + ")"
);

// Add the X Axis
PLg.append("g")
  .attr("transform", "translate(0," + PLheight + ")")
  .call(d3.axisBottom(pl_xScale))
  .attr("class", "xAxis")
  .style("font-size", "12px")
  .selectAll(".tick")
  .select("line")
  .attr("y2", "0");

PLsvg.select("g").select(".xAxis").select("path").style("stroke", "#C5C5C5");

// Add the Y Axis
PLg.append("g")
  .call(
    d3
      .axisLeft(pl_yScale)
      .tickFormat(function (d) {
        return d + "人";
      })
      .ticks(2)
  )
  .attr("class", "yAxis")
  .append("text")
  .attr("y", 6)
  .attr("dy", "0")
  .attr("text-anchor", "end")
  .text("value");

PLsvg.select("g")
  .select(".yAxis")
  .selectAll(".tick")
  .select("line")
  .attr("x2", "0");

PLsvg.select("g").select(".yAxis").select("path").style("stroke", "#C5C5C5");

PLg.selectAll(".bar")
  .data(PLdata)
  .enter()
  .append("rect")
  .style("fill", "#6E9FEE")
  .attr("x", function (d) {
    return pl_xScale(d.name);
  })
  .attr("y", function (d) {
    return pl_yScale(d.num);
  })
  .attr("width", pl_xScale.bandwidth())
  .attr("height", function (d) {
    return PLheight - pl_yScale(d.num);
  });

$(window).on("resize", function () {
  $("#peopleLength").empty();
  // 長寬定義
  pl_width = $("#peopleLength").width();
  pl_height = $("#peopleLength").height();
  PLwidth = pl_width - pl_margin.left - pl_margin.right;
  PLheight = pl_height - pl_margin.bottom - pl_margin.top;

  //   圖表定義
  PLsvg = d3
    .select("#peopleLength")
    .attr("width", pl_width)
    .attr("height", pl_height);

  // x、y軸定義
  (pl_xScale = d3.scaleBand().range([0, PLwidth]).padding(0.3)),
    (pl_yScale = d3.scaleLinear().range([PLheight, 0]));

  //   x、y軸範圍
  pl_xScale.domain(
    PLdata.map(function (d) {
      return d.name;
    })
  );
  pl_yScale.domain([0, 60]);

  // 圖表位置
  PLg = PLsvg.append("g").attr(
    "transform",
    "translate(" + pl_margin.left + "," + pl_margin.top + ")"
  );

  // Add the X Axis
  PLg.append("g")
    .attr("transform", "translate(0," + PLheight + ")")
    .call(d3.axisBottom(pl_xScale))
    .attr("class", "xAxis")
    .style("font-size", "12px")
    .selectAll(".tick")
    .select("line")
    .attr("y2", "0");

  PLsvg.select("g").select(".xAxis").select("path").style("stroke", "#C5C5C5");

  // Add the Y Axis
  PLg.append("g")
    .call(
      d3
        .axisLeft(pl_yScale)
        .tickFormat(function (d) {
          return d + "人";
        })
        .ticks(2)
    )
    .attr("class", "yAxis")
    .append("text")
    .attr("y", 6)
    .attr("dy", "0")
    .attr("text-anchor", "end")
    .text("value");

  PLsvg.select("g")
    .select(".yAxis")
    .selectAll(".tick")
    .select("line")
    .attr("x2", "0");

  PLsvg.select("g").select(".yAxis").select("path").style("stroke", "#C5C5C5");

  PLg.selectAll(".bar")
    .data(PLdata)
    .enter()
    .append("rect")
    .style("fill", "#6E9FEE")
    .attr("x", function (d) {
      return pl_xScale(d.name);
    })
    .attr("y", function (d) {
      return pl_yScale(d.num);
    })
    .attr("width", pl_xScale.bandwidth())
    .attr("height", function (d) {
      return PLheight - pl_yScale(d.num);
    });
});
