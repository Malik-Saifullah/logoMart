$(document).ready(function () {
    $("#view-ln").click(function () {
        $(".shop-product-container").css("display", "block");
        $(".card").css("flex-direction", "row");
        $(".card").css("background", "#F5F6F9");
        $(".card").css("padding", "10px");
        $(".card-img").css("max-width", "40%");
        $(".card-img").css("max-height", "250px");
        $(".card-img").css("margin-right", "25px");
    });
    $("#view-sq").click(function () {
        $(".shop-product-container").css("display", "grid");
        $(".card").css("flex-direction", "column");
        $(".card").css("background", "#fff");
        $(".card").css("padding", "0px");
        $(".card-img").css("max-width", "100%");
        $(".card-img").css("max-height", "auto");
        $(".card-img").css("margin-right", "0px");
    });
});

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


