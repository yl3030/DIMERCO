// second-menu
var SecondMenuNum = $(".second-menu").children("li").length;
var SecondMenuWidth = 100/SecondMenuNum;
$(".second-menu").children("li").css("width",SecondMenuWidth+"%");

// back-menu
$(".contract-list").children("ul").children("li").children("div").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).parent(".back-main-menu").children(".back-drop-down").slideUp(300);
    }else {
        $(this).addClass("active");
        $(this).parent(".back-main-menu").children(".back-drop-down").slideDown(300);
    }
})

// alert-box
$(".alert-box").children("div").children("h5").append("注意事項及風險揭露警語");
$(".alert-box").children("div").children("p").append("基金交易係以長期投資為目的，不宜期待於短期內獲取高利益。任何基金單位之價格，及其收益均可能漲或跌，故不一定能取回投資金額。投資人申購前應自行了解判斷。");

// agree-box
$(".agree-box").click(function(){
    if($(this).children("div").hasClass("active")){
        $(this).children("div").removeClass("active");
        $(".agree-btn").attr('disabled',true);
    }else{
        $(this).children("div").addClass("active");
        $(".agree-btn").attr('disabled',false);
    }
})

// select-box
$(".select-box.select").click(function(){
    $(".sb").slideToggle(100);
})
$(document).click(function (event) {
	var d_con = $(".select-box");
	if (!d_con.is(event.target) && d_con.has(event.target).length === 0) {
		$(".sb").slideUp(100);
	}
});
$(".sb").children(".select-box").click(function(){
    var select_type = $(this).children(".st").text();
    $(".sts").empty();
    $(".sts").append(select_type);
    $(".sb").slideUp(100);
})

// link
$("a.no-link").attr("href","javascript:void(0)");
$("a.blank-link").attr("target","_blank");