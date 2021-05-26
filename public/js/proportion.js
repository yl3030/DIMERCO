// 長寬定義
var pr_margin = { left: 55, right: 20, top: 30, bottom: 80 };
var p_width = $("#proportionReport").width();
var p_height = $("#proportionReport").height();
var pr_width = p_width - pr_margin.left - pr_margin.right;
var pr_height = p_height - pr_margin.bottom - pr_margin.top;

// 資料
var PR_data = [
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

//   圖表定義
var PRsvg = d3
  .select("#proportionReport")
  .attr("width", p_width)
  .attr("height", p_height);

// x、y軸定義
var pr_xScale = d3.scaleLinear().domain([0, 25]).range([0, pr_width]),
  pr_yScale = d3.scaleLinear().domain([0, 10]).range([pr_height, 0]);

// 圖表位置
var PRg = PRsvg.append("g").attr(
  "transform",
  "translate(" + pr_margin.left + "," + pr_margin.top + ")"
);

// 標題
PRsvg.append("text")
  .attr("x", pr_width / 2 + pr_margin.left)
  .attr("y", pr_height - 15 + 85)
  .attr("text-anchor", "middle")
  .style("font-family", "微軟正黑體")
  .style("font-size", 12)
  .style("color", "#4E4E4E")
  .text("比重");
PRsvg.append("text")
  .attr("text-anchor", "middle")
  .attr("transform", "translate(15," + (pr_height / 2 + 30) + ")rotate(-90)")
  .style("font-family", "微軟正黑體")
  .attr("text-anchor", "middle")
  .style("font-size", 12)
  .style("color", "#4E4E4E")
  .text("投資報酬率");

// Add the X Axis
PRg.append("g")
  .attr("transform", "translate(0," + pr_height + ")")
  .style("color", "#4E4E4E")
  .style("font-size", "12px")
  .call(d3.axisBottom(pr_xScale).ticks(5))
  .attr("class", "xAxis")
  .selectAll("g")
  .select("text")
  .text(function (d) {
    return d + "%";
  });

PRsvg.select("g").select(".xAxis").select("path").style("stroke", "#E2E2E2");

PRsvg.select("g")
  .select(".xAxis")
  .selectAll(".tick")
  .select("line")
  .attr("y2", "0");

// Add the Y Axis
PRg.append("g")
  .style("color", "#4E4E4E")
  .style("font-size", "12px")
  .call(d3.axisLeft(pr_yScale).ticks(5))
  .attr("class", "yAxis")
  .selectAll("g")
  .select("text")
  .text(function (d) {
    return d + "%";
  });

PRsvg.select("g").selectAll(".yAxis").select("path").style("stroke", "#E2E2E2");

PRsvg.select("g")
  .select(".yAxis")
  .selectAll(".tick")
  .select("line")
  .attr("x2", "0");

//   背景色塊
PRsvg.append("rect")
  .attr("width", pr_width / 2)
  .attr("height", pr_height / 2)
  .attr("fill", "#FEFAF5")
  .attr("transform", "translate(" + pr_margin.left + "," + pr_margin.top + ")");
PRsvg.append("rect")
  .attr("width", pr_width / 2)
  .attr("height", pr_height / 2)
  .attr("fill", "#FEFAF5")
  .attr(
    "transform",
    "translate(" +
      (pr_margin.left + pr_width / 2) +
      "," +
      (pr_margin.top + pr_height / 2) +
      ")"
  );

// 網格
function make_x_gridlines() {
  return d3.axisBottom(pr_xScale).ticks(5);
}
function make_y_gridlines() {
  return d3.axisLeft(pr_yScale).ticks(5);
}
PRsvg.append("g")
  .attr("class", "grid")
  .attr("transform", "translate(" + pr_margin.left + "," + pr_margin.top + ")")
  .attr("width", pr_width)
  .attr("height", pr_height)
  .call(make_x_gridlines().tickSize(pr_height).tickFormat(""))
  .selectAll("line")
  .attr("stroke", "#E2E2E2");
PRsvg.append("g")
  .attr("class", "grid")
  .attr("transform", "translate(" + pr_margin.left + "," + pr_margin.top + ")")
  .attr("width", pr_width)
  .attr("height", pr_height)
  .call(make_y_gridlines().tickSize(-pr_width).tickFormat(""))
  .selectAll("line")
  .attr("stroke", "#E2E2E2");

PRsvg.selectAll(".grid").select("path").attr("stroke", "#E2E2E2");

// 橙色線條
PRsvg.append("rect")
  .attr("width", pr_width)
  .attr("height", 3)
  .attr("fill", "#F29A33")
  .attr(
    "transform",
    "translate(" + pr_margin.left + "," + (pr_height / 2 + pr_margin.top) + ")"
  );
PRsvg.append("rect")
  .attr("width", 3)
  .attr("height", pr_height)
  .attr("fill", "#F29A33")
  .attr(
    "transform",
    "translate(" + (pr_margin.left + pr_width / 2) + "," + pr_margin.top + ")"
  );

// 點設定
PRsvg.selectAll("dot")
  .data(PR_data)
  .enter()
  .append("circle")
  .attr("cx", (d) => {
    return pr_xScale(d.x);
  })
  .attr("cy", (d) => {
    return pr_yScale(d.y);
  })
  .attr("r", 5)
  .attr(
    "transform",
    "translate(" + pr_margin.left + "," + pr_margin.right + ")"
  )
  .style("fill", "#F39A34");

// 顯示資料
PRsvg.selectAll("dot")
  .data(PR_data)
  .enter()
  .append("text")
  .attr("dx", (d) => {
    if (d.x > 20) {
      return pr_xScale(d.x) - 100;
    } else {
      return pr_xScale(d.x) + 10;
    }
  })
  .attr("dy", (d) => {
    return pr_yScale(d.y) + 8;
  })
  .text(function (d) {
    return " (" + d.x + "%, " + d.y + "%)";
  })
  .attr("font-size", "13px")
  .attr(
    "transform",
    "translate(" + pr_margin.left + "," + pr_margin.right + ")"
  );
PRsvg.selectAll("dot")
  .data(PR_data)
  .enter()
  .append("text")
  .attr("dx", (d) => {
    if (d.x > 20) {
      return pr_xScale(d.x) - 20;
    } else {
      return pr_xScale(d.x) - 5;
    }
  })
  .attr("dy", (d) => {
    return pr_yScale(d.y) - 10;
  })
  .text(function (d) {
    return d.name;
  })
  .attr("font-size", "13px")
  .attr(
    "transform",
    "translate(" + pr_margin.left + "," + pr_margin.right + ")"
  );

$(window).on("resize", function () {
  $("#proportionReport").empty();
  // 長寬定義
  p_width = $("#proportionReport").width();
  p_height = $("#proportionReport").height();
  pr_width = p_width - pr_margin.left - pr_margin.right;
  pr_height = p_height - pr_margin.bottom - pr_margin.top;

  //   圖表定義
  PRsvg = d3
    .select("#proportionReport")
    .attr("width", p_width)
    .attr("height", p_height);

  // x、y軸定義
  pr_xScale = d3.scaleLinear().domain([0, 25]).range([0, pr_width]),
    pr_yScale = d3.scaleLinear().domain([0, 10]).range([pr_height, 0]);

  // 圖表位置
  PRg = PRsvg.append("g").attr(
    "transform",
    "translate(" + pr_margin.left + "," + pr_margin.top + ")"
  );

  // 標題
  PRsvg.append("text")
    .attr("x", pr_width / 2 + pr_margin.left)
    .attr("y", pr_height - 15 + 85)
    .attr("text-anchor", "middle")
    .style("font-family", "微軟正黑體")
    .style("font-size", 12)
    .style("color", "#4E4E4E")
    .text("比重");
  PRsvg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(15," + (pr_height / 2 + 30) + ")rotate(-90)")
    .style("font-family", "微軟正黑體")
    .attr("text-anchor", "middle")
    .style("font-size", 12)
    .style("color", "#4E4E4E")
    .text("投資報酬率");

  // Add the X Axis
  PRg.append("g")
    .attr("transform", "translate(0," + pr_height + ")")
    .style("color", "#4E4E4E")
    .style("font-size", "12px")
    .call(d3.axisBottom(pr_xScale).ticks(5))
    .attr("class", "xAxis")
    .selectAll("g")
    .select("text")
    .text(function (d) {
      return d + "%";
    });

  PRsvg.select("g").select(".xAxis").select("path").style("stroke", "#E2E2E2");

  PRsvg.select("g")
    .select(".xAxis")
    .selectAll(".tick")
    .select("line")
    .attr("y2", "0");

  // Add the Y Axis
  PRg.append("g")
    .style("color", "#4E4E4E")
    .style("font-size", "12px")
    .call(d3.axisLeft(pr_yScale).ticks(5))
    .attr("class", "yAxis")
    .selectAll("g")
    .select("text")
    .text(function (d) {
      return d + "%";
    });

  PRsvg.select("g")
    .selectAll(".yAxis")
    .select("path")
    .style("stroke", "#E2E2E2");

  PRsvg.select("g")
    .select(".yAxis")
    .selectAll(".tick")
    .select("line")
    .attr("x2", "0");

  //   背景色塊
  PRsvg.append("rect")
    .attr("width", pr_width / 2)
    .attr("height", pr_height / 2)
    .attr("fill", "#FEFAF5")
    .attr(
      "transform",
      "translate(" + pr_margin.left + "," + pr_margin.top + ")"
    );
  PRsvg.append("rect")
    .attr("width", pr_width / 2)
    .attr("height", pr_height / 2)
    .attr("fill", "#FEFAF5")
    .attr(
      "transform",
      "translate(" +
        (pr_margin.left + pr_width / 2) +
        "," +
        (pr_margin.top + pr_height / 2) +
        ")"
    );

  // 網格
  function make_x_gridlines() {
    return d3.axisBottom(pr_xScale).ticks(5);
  }
  function make_y_gridlines() {
    return d3.axisLeft(pr_yScale).ticks(5);
  }
  PRsvg.append("g")
    .attr("class", "grid")
    .attr(
      "transform",
      "translate(" + pr_margin.left + "," + pr_margin.top + ")"
    )
    .attr("width", pr_width)
    .attr("height", pr_height)
    .call(make_x_gridlines().tickSize(pr_height).tickFormat(""))
    .selectAll("line")
    .attr("stroke", "#E2E2E2");
  PRsvg.append("g")
    .attr("class", "grid")
    .attr(
      "transform",
      "translate(" + pr_margin.left + "," + pr_margin.top + ")"
    )
    .attr("width", pr_width)
    .attr("height", pr_height)
    .call(make_y_gridlines().tickSize(-pr_width).tickFormat(""))
    .selectAll("line")
    .attr("stroke", "#E2E2E2");

  PRsvg.selectAll(".grid").select("path").attr("stroke", "#E2E2E2");

  // 橙色線條
  PRsvg.append("rect")
    .attr("width", pr_width)
    .attr("height", 3)
    .attr("fill", "#F29A33")
    .attr(
      "transform",
      "translate(" +
        pr_margin.left +
        "," +
        (pr_height / 2 + pr_margin.top) +
        ")"
    );
  PRsvg.append("rect")
    .attr("width", 3)
    .attr("height", pr_height)
    .attr("fill", "#F29A33")
    .attr(
      "transform",
      "translate(" + (pr_margin.left + pr_width / 2) + "," + pr_margin.top + ")"
    );

  // 點設定
  PRsvg.selectAll("dot")
    .data(PR_data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return pr_xScale(d.x);
    })
    .attr("cy", (d) => {
      return pr_yScale(d.y);
    })
    .attr("r", 5)
    .attr(
      "transform",
      "translate(" + pr_margin.left + "," + pr_margin.right + ")"
    )
    .style("fill", "#F39A34");

  // 顯示資料
  PRsvg.selectAll("dot")
    .data(PR_data)
    .enter()
    .append("text")
    .attr("dx", (d) => {
      if (d.x > 20) {
        return pr_xScale(d.x) - 100;
      } else {
        return pr_xScale(d.x) + 10;
      }
    })
    .attr("dy", (d) => {
      return pr_yScale(d.y) + 8;
    })
    .text(function (d) {
      return " (" + d.x + "%, " + d.y + "%)";
    })
    .attr("font-size", "13px")
    .attr(
      "transform",
      "translate(" + pr_margin.left + "," + pr_margin.right + ")"
    );
  PRsvg.selectAll("dot")
    .data(PR_data)
    .enter()
    .append("text")
    .attr("dx", (d) => {
      if (d.x > 20) {
        return pr_xScale(d.x) - 20;
      } else {
        return pr_xScale(d.x) - 5;
      }
    })
    .attr("dy", (d) => {
      return pr_yScale(d.y) - 10;
    })
    .text(function (d) {
      return d.name;
    })
    .attr("font-size", "13px")
    .attr(
      "transform",
      "translate(" + pr_margin.left + "," + pr_margin.right + ")"
    );
});
