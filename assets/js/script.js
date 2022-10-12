
// DEPENDENCIES

// Search Container
var searchBtn = $('button');
// City Weather Container
var cityWeather = document.getElementById('city-container');
var cityName = document.getElementById('city-name');
var date = moment().format("MM/DD/YY");
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var hum = document.getElementById('hum');
// City 5-Day Forecast Container
var cityForecast = document.getElementById('forecast-container');
// API variables
var city;
var APIKey = "b0bc992715f4e9f7987f6f966de30308";



// FUNCTIONS

//when user inputs and enters city name => get API and display weather //
searchBtn.on('click', function() {
    if (city==="") {
        return;
    }
    else {
    getAPI();
    }

})


function getAPI() {
    var city = document.getElementById('userInput').value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    console.log(queryURL);
    
    fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

    console.log(data.name);

    cityName.textContent = data.name + "  (" + date + ")";
    temp.textContent = "Temp:  " + data.main.temp + "ºF";
    wind.textContent = "Wind:  " + data.wind.speed + " mph";
    hum.textContent = "Humidity:  " + data.main.humidity + "%";


    var city = document.getElementById('userInput').value;
    var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    fetch(forecastURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data) 

    })

    for (var i=4; i < data.length; i+16) {
        var dayDiv = document.createElement('div');
        var dayTemp = document.createElement('p');
        var dayWind = document.createElement('p');
        var dayHum = document.createElement('p');

        dayTemp.textContent = "Temp:  " + data[i].main.temp + "ºF";
        dayWind.textContent = "Wind:  " + data[i].wind.speed + " mph";
        dayHum.textContent = "Humidity:  " + data[i].main.humidity + "%";

        dayDiv.appendChild(dayTemp);
        dayDiv.appendChild(dayWind);
        dayDiv.appendChild(dayHum);
        forecastContainer.appendChild(dayDiv);

        console.log(data[4].main.temp);
    }

    })
}