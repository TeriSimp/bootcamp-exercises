$(document).ready(function() {
    // $ = document.querySelector hoặc querySelectorAll
    $("h1").addClass("big-title margin-50");
    $("button").text("Don't click me");
    $("a").attr("href", "https://www.facebook.com");
});

$("h2").click(function() {
    $("h2").css("color", "purple");
})

// for (var i = 0; i<5; i++) {
//    document.querySelectorAll("button")[i].addEventListener("click", function() {
//        document.querySelector("h2").style.color = "purple";
//    })
// }

$("button").click(function() {
    $("h2").animate({ opacity: 0.5});
    $("h1").slideUp().slideDown(); //toggle; fadeToggle
});

$("input").keydown(function(event) {
    console.log(event.key);
});

$(document).keydown(function(event) {
    $("h2").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
});