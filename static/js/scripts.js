function getWeather() {    
    let getCity = $('#cityInput').val();
    let apiID = '&appid=86e5c8fb817d787866c82bf6406b4923';
    let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + getCity + apiID;
    
    $.getJSON(apiCall, updateData);
}

// Min, max, temp, sunrise, sunset, feels like, lat, lon
function updateData(weatherData) {
    
    //let icon = weatherData.weather.icon;
    let cityName = weatherData.name;
    let country = weatherData.sys.country;
    let min = weatherData.main.temp_min;
    let max = weatherData.main.temp_max;
    let temp = Math.round(10*(weatherData.main.temp - 273.15))/10;
    let sunrise = weatherData.sys.sunrise;
    let sunset = weatherData.sys.sunset;
    let feels_like = weatherData.main.feels_like;
    let lat = weatherData.coord.lat;
    let lon = weatherData.coord.lon;
    
    document.getElementById("weather").textContent = temp.toString() + " °C";
}
