// second-menu
var SecondMenuNum = $(".second-menu").children("li").length;
var SecondMenuWidth = 100 / SecondMenuNum;
$(".sub-header .second-menu")
  .children("li")
  .css("width", SecondMenuWidth + "%");

// back-menu
$(".dl_1").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .parent(".back-main-menu")
        .children(".back-drop-down")
        .slideUp(300);
    } else {
      $(this).addClass("active");
      $(this)
        .parent(".back-main-menu")
        .children(".back-drop-down")
        .slideDown(300);
    }
  });
$(".dl_2").click(function(){
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $(this).parents("li").removeClass("active");
    $(this).parents("li").children(".dropdown-link").slideUp(300);
  }else {
    $(this).addClass("active");
    $(this).parents("li").addClass("active");
    $(this).parents("li").children(".dropdown-link").slideDown(300);
  }
})

// mobile-back-menu
// $(".menu-user").click(function () {
//   if ($(".outer-menu").hasClass("active")) {
//     $(".outer-menu").removeClass("active");
//   } else {
//     $(".outer-menu").addClass("active");
//   }
// });
// $(".mobile-back-menu .item").click(function(){
//   $(".item-list").slideToggle(100);
// })
$("#menu-back-icon").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".outer-menu").removeClass("active");
  } else {
    $(this).addClass("active");
    $(".outer-menu").addClass("active");
  }
});
$("#cross").click(function () {
  $(this).removeClass("active");
  $(".outer-menu").removeClass("active");
});

// mobile-menu
$("#menu-icon").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".mobile-menu").slideUp(300);
  } else {
    $(this).addClass("active");
    $(".mobile-menu").slideDown(300);
  }
});
$(".mobile-menu .drop-down").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).children("ul").slideUp(300);
  } else {
    $(this).addClass("active");
    $(this).children("ul").slideDown(300);
  }
});

// alert-box
$(".alert-box").children("div").children("h5").append("注意事項及風險揭露警語");
$(".alert-box")
  .children("div")
  .children("p")
  .append(
    "基金交易係以長期投資為目的，不宜期待於短期內獲取高利益。任何基金單位之價格，及其收益均可能漲或跌，故不一定能取回投資金額。投資人申購前應自行了解判斷。"
  );

// agree-box
var scrollint = 0;
var containerHeight = $("#viewerContainer").height();

$("#viewerContainer").on("scroll", function () {
  scrollint = $("#viewerContainer").scrollTop();
  var viewerHeight = $("#viewer").height();
  if (scrollint + containerHeight > viewerHeight) {
    $(".agree-box").addClass("ableToClick").css("cursor", "pointer");
  }
});
$(".agree-box").click(function () {
  if (
    !$(this).children(".check-box").hasClass("active") &&
    $(this).hasClass("ableToClick")
  ) {
    $(this).children(".check-box").addClass("active");
    $(".agree-btn").attr("disabled", false);
  } else if ($(this).children(".check-box").hasClass("active")) {
    $(this).children(".check-box").removeClass("active");
    $(".agree-btn").attr("disabled", true);
  }
});
$(".pdf-box")
  .children("iframe")
  .on("scroll", function () {
    console.log("scroll");
  });

// select-box
$(".select-box.select").click(function () {
  $(".sb").slideToggle(100);
});
$(document).click(function (event) {
  var d_con = $(".select-box");
  if (!d_con.is(event.target) && d_con.has(event.target).length === 0) {
    $(".sb").slideUp(100);
  }
});
$(".sb")
  .children(".select-box")
  .click(function () {
    var select_type = $(this).children(".st").text();
    $(".sts").empty();
    $(".sts").append(select_type);
    $(".sb").slideUp(100);
  });

// link
$("a.no-link").attr("href", "javascript:void(0)");
$("a.blank-link").attr("target", "_blank");
