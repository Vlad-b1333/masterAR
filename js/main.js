window.setInterval(function() {
    getTime();
}, 10);

function getTime() {
    var deadline = new Date("sept 17, 2019 24:00:00").getTime();
    var now = new Date().getTime();
    if (now < deadline) {
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (days < 10) {
            days = "0" + days;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    } else if (now >= deadline) {
        $("#days").text("00");
        $("#hours").text("00");
        $("#minutes").text("00");
        $("#seconds").text("00");
        $("#getCount").attr("href", "#");
        $("#getCount").attr("target", "self");
        $("#getCount1").attr("href", "#");
        $("#getCount1").attr("target", "self");
    }
}

function closePopUp(value) {
    if (value == 1) {
        $(".popUp1").slideUp("slow");
        $(".popUp1").remove();
    } else if (value == 2) {
        $(".popUp2").slideUp("slow");
        $(".popUp2").remove();
    }
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById("containerPopUp").style.display = "grid";
        $(".popUp1").slideDown("fast");
    }, 180)

    setTimeout(function() {
        document.getElementById("containerPopUp").style.display = "grid";
        $(".popUp2").slideDown("fast");
    }, 850)
};