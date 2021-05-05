// second-menu
var SecondMenuNum = $(".second-menu").children("li").length;
var SecondMenuWidth = 100/SecondMenuNum;
$(".second-menu").children("li").css("width",SecondMenuWidth+"%");

// new
$(".tab-box").children("button").click(function(){
    $(".tab-box").children("button").removeClass("active")
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