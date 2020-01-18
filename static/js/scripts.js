function getWeather() {    
    let getCity = $('#cityInput').val();
    let apiID = '&appid=86e5c8fb817d787866c82bf6406b4923';
    let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + getCity + apiID;
    
    $.getJSON(apiCall, updateData);
}

// Min, max, temp, sunrise, sunset, feels like, lat, lon
function updateData(weatherData) {
    
    let icon = weatherData.weather[0].icon;
    let min = Math.round(10*(weatherData.main.temp_min - 273.15))/10;
    let max = Math.round(10*(weatherData.main.temp_max - 273.15))/10;
    let temp = Math.round(10*(weatherData.main.temp - 273.15))/10;
    let sunrise = weatherData.sys.sunrise;
    let sunset = weatherData.sys.sunset;
    let feels_like = weatherData.main.feels_like;
    let lat = weatherData.coord.lat;
    let lon = weatherData.coord.lon;
    let description = weatherData.weather[0].description;
    let speed = weatherData.wind.speed;
    let direction = weatherData.wind.deg;
    let humidity = weatherData.main.humidity;
    let pressure = weatherData.main.pressure;

    document.getElementById("weather").textContent = temp.toString() + " °C";
    document.getElementById("description").textContent = capitalizeFirstLetter(description);
    document.getElementById("minTemp").textContent = min.toString() + "°C";
    document.getElementById("maxTemp").textContent = max.toString() + "°C";
    document.getElementById("windSpeed").textContent = speed.toString() + " m/s";
    document.getElementById("windDirection").textContent = direction.toString() + "°";
    document.getElementById("humidity").textContent = humidity.toString() + " %";
    document.getElementById("pressure").textContent = pressure.toString() + " hPa";
    document.getElementById("sunrise").textContent = formatTime(sunrise) + " UTC";
    document.getElementById("sunset").textContent = formatTime(sunset) + " UTC";
    document.getElementById("longitude").textContent = lon;
    document.getElementById("latitude").textContent = lat;
    //document.getElementById("weatherIcon").className = "owf owf-5x owf-" + icon;
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function formatTime(unixTimestamp){
    var date = new Date(unixTimestamp*1000);
    date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}