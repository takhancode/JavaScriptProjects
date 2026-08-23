let cityinput = document.getElementById("city-input");
let search = document.getElementById("search");
let error = document.getElementById("error");

search.addEventListener("click", function () {

    if (cityinput.value === "") {
        error.style.display = "block";
    }
    else {

        error.style.display = "none";

        let url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityinput.value}`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {

                let latitude = result.results[0].latitude;
                let longitude = result.results[0].longitude;

                let weatherUrl =
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

                console.log(weatherUrl);

            });

    }

});