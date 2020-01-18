function getWeather() {    
    let getCity = $('#cityInput').val();
    let metric = "&units=metric";
    let apiID = '&appid=86e5c8fb817d787866c82bf6406b4923';
    let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + getCity + metric + apiID;
    
    $.getJSON(apiCall, updateData);
}

function updateData(weatherData) {
    let icon = weatherData.weather[0].icon;
    let min = Math.round(10*(weatherData.main.temp_min ))/10;
    let max = Math.round(10*(weatherData.main.temp_max ))/10;
    let temp = Math.round(10*(weatherData.main.temp))/10;
    let sunrise = weatherData.sys.sunrise;
    let sunset = weatherData.sys.sunset;
    let feels_like = Math.round(10*(weatherData.main.feels_like))/10;
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
    document.getElementById("feelsLike").textContent = feels_like.toString() + "°C";
    let iconurl = 'http://api.openweathermap.org/img/w/' + icon + '.png';
    $('#weatherIcon').attr('src', iconurl);
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