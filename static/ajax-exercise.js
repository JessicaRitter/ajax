"use strict";


// PART 1: SHOW A FORTUNE


function getFortune() {
    $.get("/fortune", function (results) {
       $("#fortune-text").html(results);
    });
}



$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function getWeather(results) {
    $("#weather-info").html(results["forecast"]);

}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $.get(url, getWeather);

}



$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function getMelonInfo (results) {

    if (results["code"] === "ERROR") {
        $('#order-status').addClass("order-error");
        $('#order-status').html(results['msg']);
    }
    else {
        $('#order-status').html(results['msg']);
    }

}

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        "qty": $('#qty-field').val(),
        "melon_type": $("#melon-type-field").val(),
    };

    console.log(formInputs);

    $.post("/order-melons.json", formInputs, getMelonInfo);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


