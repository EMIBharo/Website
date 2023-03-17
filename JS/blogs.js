// nav background
let header = document.querySelector("header");

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("100")
        } else{
            $(".post-box")
                .not("." + value)
                .hide("100");
            $(".post-box")
            .filter("." + value)
            .show("100")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});
