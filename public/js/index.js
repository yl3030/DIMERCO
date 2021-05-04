// second-menu
var SecondMenuNum = $(".second-menu").children("li").length;
var SecondMenuWidth = 100/SecondMenuNum;
$(".second-menu").children("li").css("width",SecondMenuWidth+"%");