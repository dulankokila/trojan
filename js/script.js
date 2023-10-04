(function ($) {
    //=============================
    //Preloader Start
    //=============================
    $(window).on("load", function () {
        $("#status").fadeOut();
        $("#preloader").delay(500).fadeOut("slow");
        $("body").delay(500).css({ overflow: "visible" });
    });
    //======================
    // Main Menu
    //======================
    $(".toggler-btn").on("click", function () {
        $(".header-menu").toggle();
    });

    //=============================
    // Sticky Start
    //=============================
    var wind = $(window);
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            sticky = $(".sticky"),
            logo = $(".sticky .logo> img");
        if (bodyScroll > 150) {
            sticky.addClass("nav-scroll");
        } else {
            sticky.removeClass("nav-scroll");
        }
    });

    //======================
    // COUNTER
    //======================
    if ($(".counter").length > 0) {
        $(".counter").counterUp();
    }
})(jQuery);
