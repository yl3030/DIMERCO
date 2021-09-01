// 資料
let VPdata = [
  { val: 400000, name: "基金" , color:"#EDC693" },
  { val: 2939000, name: "股票", color:"#F5E5CC" },
  { val: 1000000, name: "現金", color:"#E7A658" },
];

// 定義圖表
var VPsvg = d3.select("#valueProportion");
var pie = d3.pie();

// 圓餅半徑=外框寬度*比例
var vp_radius;
if($(window).width()>400){
  vp_radius = $("#valueProportion").width() * 0.25;
}else {
  vp_radius = $("#valueProportion").width() * 0.45;
}
var arc = d3.arc().innerRadius(0).outerRadius(vp_radius);

// 圓餅位置置中
var x_position = $("#valueProportion").width() * 0.5;
var y_position = $("#valueProportion").height() * 0.5;
var VPg = VPsvg.append("g").attr(
  "transform",
  "translate(" + x_position + "," + y_position + ")"
);

// 設定資料
let dataNew = d3.map(VPdata, function (d) {
  return d.val;
});
let arcs = VPg.selectAll("arc").data(pie(dataNew)).enter().append("g");
let arcs_text = VPg.selectAll("arc").data(pie(dataNew)).enter().append("g");

// 顏色
var color = d3
  .scaleOrdinal()
  .domain(VPdata)
  .range([VPdata[0].color, VPdata[1].color, VPdata[2].color]);
arcs
  .append("path")
  .attr("fill", (d, i) => {
    return color(dataNew[i]);
  })
  .attr("d", arc);

  arcs_text
  .append("path")
  .attr("fill","transparent")
  .attr("d", arc);

//   顯示資訊位置
arcs_text
  .append("text")
  .attr("text-anchor", "middle")
  .attr("transform", (d, i) => {
    return "translate(" + arc.centroid(d) + ")";
  });
// 資料名稱(基金、股票、現金)
// arcs_text
//   .select("text")
//   .append("tspan")
//   .attr("y", "1.3rem")
//   .style("font-size", "14px")
//   .attr("fill-opacity", 0.7)
//   .text(function (d, i) {
//     return VPdata[i].name;
//   });
// 數值
// arcs_text
//   .select("text")
//   .append("tspan")
//   .attr("x", "0")
//   .attr("y", "0")
//   .style("font-size", "18px")
//   .style("font-weight", "700")
//   .style("fill", "#3A3A3A")
//   .text(function (d, i) {
//     return d.data;
//   });
// 百分比
var total = 0;
var dataLength = dataNew.length - 1;
for (i = 0; i <= dataLength; i++) {
  total = total + dataNew[i];
  console.log(total);
}
arcs_text
  .select("text")
  .append("tspan")
  .attr("x", "0")
  .style("font-size", "14px")
  .style("font-weight", "700")
  .style("fill", "#4d4d4d")
  .text(function (d, i) {
    var percent = (VPdata[i].val / total) * 100;
    var p_output = percent.toFixed(2);
    return p_output + "%";
  });

  var vp_data = $("<li></li>").addClass("vp-data");
  var color_box = $("<div></div>").addClass("color-box");
  var data_name = $("<span></span>").addClass("data-name");
  var colon = $("<span></span>").addClass("mx-1").text(":");
  var data_num = $("<span></span>").addClass("data-num");
  vp_data.append(color_box,data_name,colon,data_num);

  for(i = 0; i <= dataLength; i++){
    vp_data.clone().prependTo($(".vp-data-box"));
  }

  for(i = 0; i <= dataLength; i++){
    $(".vp-data").eq(i).children(".color-box").css("background-color",VPdata[i].color);
    $(".vp-data").eq(i).children(".data-name").text(VPdata[i].name);
    $(".vp-data").eq(i).children(".data-num").text(VPdata[i].val)
  }




// resize
$(window).on("resize", function () {
  $("#valueProportion").empty();
// 定義圖表
var VPsvg = d3.select("#valueProportion");
var pie = d3.pie();

// 圓餅半徑=外框寬度*比例
var vp_radius;
if($(window).width()>400){
  vp_radius = $("#valueProportion").width() * 0.25;
}else {
  vp_radius = $("#valueProportion").width() * 0.45;
}
var arc = d3.arc().innerRadius(0).outerRadius(vp_radius);

// 圓餅位置置中
var x_position = $("#valueProportion").width() * 0.5;
var y_position = $("#valueProportion").height() * 0.5;
var VPg = VPsvg.append("g").attr(
  "transform",
  "translate(" + x_position + "," + y_position + ")"
);

// 設定資料
let dataNew = d3.map(VPdata, function (d) {
  return d.val;
});
let arcs = VPg.selectAll("arc").data(pie(dataNew)).enter().append("g");
let arcs_text = VPg.selectAll("arc").data(pie(dataNew)).enter().append("g");

// 顏色
var color = d3
  .scaleOrdinal()
  .domain(VPdata)
  .range([VPdata[0].color, VPdata[1].color, VPdata[2].color]);
arcs
  .append("path")
  .attr("fill", (d, i) => {
    return color(dataNew[i]);
  })
  .attr("d", arc);

  arcs_text
  .append("path")
  .attr("fill","transparent")
  .attr("d", arc);

  //   顯示資訊位置
  arcs_text
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", (d, i) => {
      return "translate(" + arc.centroid(d) + ")";
    });
  // 資料名稱(基金、股票、現金)
  // arcs_text
  //   .select("text")
  //   .append("tspan")
  //   .attr("y", "1.3rem")
  //   .style("font-size", "14px")
  //   .attr("fill-opacity", 0.7)
  //   .text(function (d, i) {
  //     return VPdata[i].name;
  //   });
  // 數值
  // arcs_text
  //   .select("text")
  //   .append("tspan")
  //   .attr("x", "0")
  //   .attr("y", "0")
  //   .style("font-size", "18px")
  //   .style("font-weight", "700")
  //   .style("fill", "#3A3A3A")
  //   .text(function (d, i) {
  //     return d.data;
  //   });
  // 百分比
  total = 0;
  dataLength = dataNew.length - 1;
  for (i = 0; i <= dataLength; i++) {
    total = total + dataNew[i];
    console.log(total);
  }
  arcs_text
    .select("text")
    .append("tspan")
    .attr("x", "0")
    .style("font-size", "14px")
    .style("font-weight", "700")
    .style("fill", "#4d4d4d")
    .text(function (d, i) {
      var percent = (VPdata[i].val / total) * 100;
      var p_output = percent.toFixed(2);
      return p_output + "%";
    });
});
