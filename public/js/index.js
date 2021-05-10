// second-menu
var SecondMenuNum = $(".second-menu").children("li").length;
var SecondMenuWidth = 100/SecondMenuNum;
$(".second-menu").children("li").css("width",SecondMenuWidth+"%");

// new
$(".tab-box").children("button").click(function(){
    $(".tab-box").children("button").removeClass("active");
    $(this).addClass("active");
    $(".new-content").hide();
    if($(this).hasClass("ad")){
        $(".new-content.new-ad").show();
    }else if($(this).hasClass("speech")){
        $(".new-content.new-speech").show();
    }else if($(this).hasClass("paper")){
        $(".new-content.new-paper").show();
    }
})

// back-menu
$(".contract-list").children("ul").children("li").click(function(){
    if($(this).children("div").hasClass("active")){
        $(this).children("div").removeClass("active");
        $(this).children(".back-drop-down").slideUp(300);
    }else {
        $(this).children("div").addClass("active");
        $(this).children(".back-drop-down").slideDown(300);
    }
})

// alert-box
$(".alert-box").children("div").children("h5").append("注意事項及風險揭露警語");
$(".alert-box").children("div").children("p").append("基金交易係以長期投資為目的，不宜期待於短期內獲取高利益。任何基金單位之價格，及其收益均可能漲或跌，故不一定能取回投資金額。投資人申購前應自行了解判斷。");