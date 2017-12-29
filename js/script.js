$(function () {
    $("#like").click(function () {
        $("#like").addClass("active");
        $("#girls").removeClass("active");
        $("#boy").removeClass("active");
        $("#xie").removeClass("active");
        $("#xiang").removeClass("active");
    })
});
$(function () {
    $("#girls").click(function () {
        $("#girls").addClass("active");
        $("#like").removeClass("active");
        $("#boy").removeClass("active");
        $("#xie").removeClass("active");
        $("#xiang").removeClass("active");
    })
});
$(function () {
    $("#boy").click(function () {
        $("#boy").addClass("active");
        $("#like").removeClass("active");
        $("#girls").removeClass("active");
        $("#xie").removeClass("active");
        $("#xiang").removeClass("active");
    })
});
$(function () {
    $("#xie").click(function () {
        $("#xie").addClass("active");
        $("#like").removeClass("active");
        $("#girls").removeClass("active");
        $("#boy").removeClass("active");
        $("#xiang").removeClass("active");
    })
});
$(function () {
    $("#xiang").click(function () {
        $("#xiang").addClass("active");
        $("#like").removeClass("active");
        $("#girls").removeClass("active");
        $("#boy").removeClass("active");
        $("#xie").removeClass("active");
    })
});