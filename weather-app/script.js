let cityinput = document.getElementById("city-input");
let search = document.getElementById("search");
let error = document.getElementById("error");

let temperatureElement = document.getElementById("temperature");
let conditionElement = document.getElementById("condition");
let humidityElement = document.getElementById("humidity");
let windElement = document.getElementById("wind");

search.addEventListener("click", function () {

    if (cityinput.value === "") {
        error.innerText = "Please enter a city name";
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityinput.value}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {

            if (!result.results || result.results.length === 0) {
                error.innerText = "City not found";
                error.style.display = "block";
                return;
            }

            let latitude = result.results[0].latitude;
            let longitude = result.results[0].longitude;

            let weatherUrl =
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;

            fetch(weatherUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (result) {

                    let temperature = result.current.temperature_2m;
                    let humidity = result.current.relative_humidity_2m;
                    let wind = result.current.wind_speed_10m;
                    let condition = result.current.weather_code;

                    temperatureElement.innerText = temperature + " °C";
                    humidityElement.innerText = humidity + " %";
                    windElement.innerText = wind + " km/h";
                    conditionElement.innerText = "Code: " + condition;
                });

        })
        .catch(function () {
            error.innerText = "Something went wrong";
            error.style.display = "block";
        });

});