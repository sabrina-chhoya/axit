$(document).ready(function() {
    $("#t-option1").addClass("active");
    $("#t-content1").show();
    $("#t-content2").hide();
    $("#t-content3").hide();


    $("#t-option1").click(function() {
        // tab selection option
        $("#t-option1").addClass("active");
        $("#t-option2").removeClass("active");
        $("#t-option3").removeClass("active");

        // tab content show option
        $("#t-content1").show();
        $("#t-content2").hide();
        $("#t-content3").hide();
    });


    $("#t-option2").click(function() {
        // tab selection option
        $("#t-option1").removeClass("active");
        $("#t-option2").addClass("active");
        $("#t-option3").removeClass("active");

        // tab content show option
        $("#t-content1").hide();
        $("#t-content2").show();
        $("#t-content3").hide();
    });


    $("#t-option3").click(function() {
        // tab selection option
        $("#t-option1").removeClass("active");
        $("#t-option2").removeClass("active");
        $("#t-option3").addClass("active");

        // tab content show option
        $("#t-content1").hide();
        $("#t-content2").hide();
        $("#t-content3").show();
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

});