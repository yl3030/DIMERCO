// 長寬定義
var v_width = $("#valueStatistics").width();
var v_height = $("#valueStatistics").height();
var vs_margin = { left: 35, right: 30, top: 10, bottom: 20 };
var vs_width = v_width - vs_margin.left - vs_margin.right;
var vs_height = v_height - vs_margin.bottom - vs_margin.top;

// 資料
var VSdata = [
  { date: "2020/10", num: 20 },
  { date: "2020/11", num: 25 },
  { date: "2020/12", num: 40 },
  { date: "2021/01", num: 39 },
  { date: "2021/02", num: 45 },
  { date: "2021/03", num: 50 },
];

//   圖表定義
var VSsvg = d3
  .select("#valueStatistics")
  .attr("width", v_width)
  .attr("height", v_height);

// 背景色塊
VSsvg.append("rect")
  .attr("width", vs_width / 10)
  .attr("height", vs_height)
  .attr("fill", "#FEFAF5")
  .attr("transform", "translate(" + vs_margin.left + "," + vs_margin.top + ")");
var bg_position2 = vs_margin.left + vs_width * 0.31;
VSsvg.append("rect")
  .attr("width", vs_width / 5)
  .attr("height", vs_height)
  .attr("fill", "#FEFAF5")
  .attr("transform", "translate(" + bg_position2 + "," + vs_margin.top + ")");
var bg_position3 = vs_margin.left + vs_width * 0.72;
VSsvg.append("rect")
  .attr("width", vs_width / 5)
  .attr("height", vs_height)
  .attr("fill", "#FEFAF5")
  .attr("transform", "translate(" + bg_position3 + "," + vs_margin.top + ")");

// x、y軸定義
// x軸-時間
// y軸-數值
var VSx = d3.scaleTime().rangeRound([0, vs_width]);
var VSx_axis = d3.axisBottom(VSx);
var VSy = d3.scaleLinear().rangeRound([vs_height, 0]);
var VSy_axis = d3.axisBottom(VSy);
var xFormat = "%Y/%m";
var parseTime = d3.timeParse("%Y/%m");

//   x、y軸範圍
VSx.domain(
  d3.extent(VSdata, function (d) {
    //   將字串轉為時間
    return parseTime(d.date);
  })
);
VSy.domain([0, 60]);

//   折線定義
var line = d3
  .line()
  .x(function (d) {
    //   將字串轉為時間
    return VSx(parseTime(d.date));
  })
  .y(function (d) {
    return VSy(d.num);
  }).defined(function (d) {
    return d.num != null;
  });

// 圖表位置
var VSg = VSsvg.append("g").attr(
  "transform",
  "translate(" + vs_margin.left + "," + vs_margin.top + ")"
);

// 圖表設定
VSg.append("path")
  .datum(VSdata)
  .attr("class", "line")
  .style("stroke", "#F39B34")
  .style("stroke-width", "3px")
  .attr("d", line);
VSsvg.select(".line").style("fill", "none");

// Add the X Axis
VSg.append("g")
  .attr("transform", "translate(0," + vs_height + ")")
  .attr("fill", "#4E4E4E")
  .style("font-size", "12px")
  .call(d3.axisBottom(VSx).tickFormat(d3.timeFormat(xFormat)))
  .attr("class", "xAxis")
  .selectAll(".tick")
  .select("line")
  .attr("y2", "0");

VSsvg.select("g").select(".xAxis").select("path").style("stroke", "#C5C5C5");

// Add the Y Axis
VSg.append("g")
  .call(d3.axisLeft(VSy).ticks(2))
  .attr("class", "yAxis")
  .selectAll(".tick")
  .select("text")
  .text(function (d) {
    return d + "人";
  });

VSsvg.select("g")
  .select(".yAxis")
  .selectAll(".tick")
  .select("line")
  .attr("x2", "0");

VSsvg.select("g").select(".yAxis").select("path").style("stroke", "#C5C5C5");

// 點設定
VSsvg.selectAll("myCircles")
  .data(VSdata)
  .enter()
  .append("circle")
  .attr("fill", "#F39B34")
  .attr("stroke", "none")
  .attr("cx", function (d) {
    return VSx(parseTime(d.date));
  })
  .attr("cy", function (d) {
    return VSy(d.num);
  })
  .attr("r", function (d) {
    if (VSy(d.num) == undefined) {
      console.log(VSy(d.num));
      return 0;
    } else {
      console.log(VSy(d.num));
      return 6;
    }
  })
  .attr("transform", "translate(" + vs_margin.left + "," + vs_margin.top + ")");



$(window).on("resize", function () {
  $("#valueStatistics").empty();
  // 長寬定義
  v_width = $("#valueStatistics").width();
  v_height = $("#valueStatistics").height();
  vs_width = v_width - vs_margin.left - vs_margin.right;
  vs_height = v_height - vs_margin.bottom - vs_margin.top;

  //   圖表定義
  VSsvg = d3
    .select("#valueStatistics")
    .attr("width", v_width)
    .attr("height", v_height);

  // 背景色塊
  VSsvg.append("rect")
    .attr("width", vs_width / 10)
    .attr("height", vs_height)
    .attr("fill", "#FEFAF5")
    .attr(
      "transform",
      "translate(" + vs_margin.left + "," + vs_margin.top + ")"
    );
  bg_position2 = vs_margin.left + vs_width * 0.31;
  VSsvg.append("rect")
    .attr("width", vs_width / 5)
    .attr("height", vs_height)
    .attr("fill", "#FEFAF5")
    .attr("transform", "translate(" + bg_position2 + "," + vs_margin.top + ")");
  bg_position3 = vs_margin.left + vs_width * 0.72;
  VSsvg.append("rect")
    .attr("width", vs_width / 5)
    .attr("height", vs_height)
    .attr("fill", "#FEFAF5")
    .attr("transform", "translate(" + bg_position3 + "," + vs_margin.top + ")");

  // x、y軸定義
  // x軸-時間
  // y軸-數值
  VSx = d3.scaleTime().rangeRound([0, vs_width]);
  VSx_axis = d3.axisBottom(VSx);
  VSy = d3.scaleLinear().rangeRound([vs_height, 0]);
  VSy_axis = d3.axisBottom(VSy);

  //   x、y軸範圍
  VSx.domain(
    d3.extent(VSdata, function (d) {
      //   將字串轉為時間
      return parseTime(d.date);
    })
  );
  VSy.domain([0, 60]);

  //   折線定義
  line = d3
    .line()
    .x(function (d) {
      //   將字串轉為時間
      return VSx(parseTime(d.date));
    })
    .y(function (d) {
      return VSy(d.num);
    }).defined(function (d) {
      return d.num != null;
    });

  // 圖表位置
  VSg = VSsvg.append("g").attr(
    "transform",
    "translate(" + vs_margin.left + "," + vs_margin.top + ")"
  );

  // 圖表設定
  VSg.append("path")
    .datum(VSdata)
    .attr("class", "line")
    .style("stroke", "#F39B34")
    .style("stroke-width", "3px")
    .attr("d", line);
  VSsvg.select(".line").style("fill", "none");

  // Add the X Axis
  VSg.append("g")
    .attr("transform", "translate(0," + vs_height + ")")
    .attr("fill", "#4E4E4E")
    .style("font-size", "12px")
    .call(d3.axisBottom(VSx).tickFormat(d3.timeFormat(xFormat)))
    .attr("class", "xAxis")
    .selectAll(".tick")
    .select("line")
    .attr("y2", "0");

  VSsvg.select("g").select(".xAxis").select("path").style("stroke", "#C5C5C5");

  // Add the Y Axis
  VSg.append("g")
    .call(d3.axisLeft(VSy).ticks(2))
    .attr("class", "yAxis")
    .selectAll(".tick")
    .select("text")
    .text(function (d) {
      return d + "人";
    });

  VSsvg.select("g")
    .select(".yAxis")
    .selectAll(".tick")
    .select("line")
    .attr("x2", "0");

  VSsvg.select("g").select(".yAxis").select("path").style("stroke", "#C5C5C5");

  // 點設定
  VSsvg.selectAll("myCircles")
    .data(VSdata)
    .enter()
    .append("circle")
    .attr("fill", "#F39B34")
    .attr("stroke", "none")
    .attr("cx", function (d) {
      return VSx(parseTime(d.date));
    })
    .attr("cy", function (d) {
      return VSy(d.num);
    })
    .attr("r", function (d) {
      if (VSy(d.num) == undefined) {
        console.log(VSy(d.num));
        return 0;
      } else {
        console.log(VSy(d.num));
        return 6;
      }
    })
    .attr(
      "transform",
      "translate(" + vs_margin.left + "," + vs_margin.top + ")"
    );
});
