"use strict";


// PART 1: SHOW A FORTUNE


function getFortune() {
    $.get("/fortune", function (results) {
       $("#fortune-text").html(results);
    });
}



$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER



function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $.get(url, function (results) { $("#weather-info").html(results["forecast"]);

});

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

    var formValues = $('#order-form').serialize();

    $.post("/order-melons.json", formValues, getMelonInfo);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


