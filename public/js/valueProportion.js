// 資料
let VPdata = [
  { val: 3700000, type: 3700000, name: "基金" },
  { val: 2939000, type: 2939000, name: "股票" },
  { val: 1000000, type: 1000000, name: "現金" },
];

// 定義圖表
var VPsvg = d3.select("#valueProportion");
var pie = d3.pie();

// 圓餅半徑=外框寬度*0.35
var vp_radius = $("#valueProportion").width()*0.35;
var arc = d3.arc().innerRadius(0).outerRadius(vp_radius);


// 圓餅位置置中
var x_position = $("#valueProportion").width()*0.5;
var y_position = $("#valueProportion").height()*0.5;
var VPg = VPsvg.append("g").attr("transform", "translate(" + x_position + "," + y_position + ")");

// 設定資料
let dataNew = d3.map(VPdata, function (d) {
    return d.val;
  });
  let fontData = d3.map(VPdata, function (d) {
    return d.type;
  });
let arcs = VPg.selectAll("arc").data(pie(dataNew)).enter().append("g");
let font = VPg.selectAll("arc").data(pie(fontData)).enter().append("g");

// 顏色
var color = d3.scaleOrdinal()
  .domain(VPdata)
  .range(["#EDC693", "#F5E5CC", "#E7A658"])
arcs
  .append("path")
  .attr("fill", (d,i) => {
    return (color(fontData[i]));
  })
  .attr("d", arc);


//   顯示資訊位置
  font.append("text").attr("text-anchor", "middle").attr("transform", (d, i) => {
    return "translate(" + arc.centroid(d) + ")";
  });
// 資料名稱(基金、股票、現金)
font
  .select("text").append("tspan")
  .attr("y","1.3rem").style("font-size","14px").attr("fill-opacity", 0.7)
  .text(function (d, i) {
    return VPdata[i].name;
  });
// 數值
font
.select("text").append("tspan")
.attr("x","0")
.attr("y","0").style("font-size","18px").style("font-weight","700").style("fill","#3A3A3A")
  .text(function (d, i) {
    return d.data;
  });
// 百分比
  font
  .select("text").append("tspan")
  .attr("x","0")
  .attr("y","-1.3rem").style("font-size","14px").style("font-weight","700").style("fill","#A06B2F")
  .text(function (d, i) {
      var total = dataNew[0] + dataNew[1] + dataNew[2];
      var percent = VPdata[i].val/total*100;
      var p_output = percent.toFixed(2);
    return p_output + "%";
  });