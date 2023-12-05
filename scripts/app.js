navigator.geolocation.getCurrentPosition(success, errorFunc);

//user input
//favorite btn
//icons
//dates 
//max temp
//min temp
//feels like
//humidity
//current weather
//description 

let favoriteBtn = document.getElementById('favoriteBtn');
let userInput = document.getElementById('enterCity');
let searchBtn = document.getElementById('searchBtn');
let currentLocation = document.getElementById('currentLocation');
let currentDate = document.getElementById('currentDate');
let laterDate1 = document.getElementById('laterDate1');
let laterDate2 = document.getElementById('laterDate2');
let laterDate3 = document.getElementById('laterDate3');
let laterDate4 = document.getElementById('laterDate4');
let laterDate5 = document.getElementById('laterDate5');
let currentTemp = document.getElementById('currentTemp')
let currentWeatherIcon = document.getElementById('currentWeatherIcon');
let weatherIcon1 = document.getElementById('weatherIcon1');
let weatherIcon2 = document.getElementById('weatherIcon2');
let weatherIcon3 = document.getElementById('weatherIcon3');
let weatherIcon4 = document.getElementById('weatherIcon4');
let weatherIcon5 = document.getElementById('weatherIcon5');
let currentMaxTemp = document.getElementById('currentMaxTemp');
let maxTemp1 = document.getElementById('maxTemp1');
let maxTemp2 = document.getElementById('maxTemp2');
let maxTemp3 = document.getElementById('maxTemp3');
let maxTemp4 = document.getElementById('maxTemp4');
let maxTemp5 = document.getElementById('maxTemp5');
let currentMinTemp = document.getElementById('currentMinTemp');
let minTemp1 = document.getElementById('minTemp1');
let minTemp2 = document.getElementById('minTemp2');
let minTemp3 = document.getElementById('minTemp3');
let minTemp4 = document.getElementById('minTemp4');
let minTemp5 = document.getElementById('minTemp5');
let feelsLike = document.getElementById('feelsLike');
let humidity = document.getElementById('humidity');
let iconData = document.getElementById('iconData');


async function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let cityName = position.name;
    let stateCode = position.state;
    let countryCode = position.country;
    const city = await SearchInput(cityName, stateCode, countryCode);
    const state = await SearchInput(cityName, stateCode, countryCode);
    const country = await SearchInput(cityName, stateCode, countryCode);
    const weather5Day = await WeatherData(latitude, longitude);
    const weatherLocal = await CurrentWeather(latitude, longitude);

    console.log('our latitude: ' + position.coords.latitude);
    console.log('out longitude: ' + position.coords.longitude);

    console.log(city);
    console.log(state);
    console.log(country);
    console.log(weather5Day);
    console.log(weatherLocal);

    // current weather forecast
    currentDate.innerText = weather5Day.list[0].dt_txt;
    currentLocation.innerText = weatherLocal.name.toUpperCase();
    currentTemp.innerText = weatherLocal.main.temp + '°';
    currentMaxTemp.innerText = weatherLocal.main.temp_max + '°';
    currentMinTemp.innerText = weatherLocal.main.temp_min + '°';
    feelsLike.innerText = weatherLocal.main.feels_like + '°';
    humidity.innerText = weatherLocal.main.humidity + '%';
    iconData.innerText = weatherLocal.weather[0].description;

    // day 1, 5 day forecast
    weatherIcon1.innerText = weather5Day.list[1].weather[0].icon;
    laterDate1.innerText = weather5Day.list[1].dt_txt;
    maxTemp1.innerText = weather5Day.list[1].main.temp_max + '°';
    minTemp1.innerText = weather5Day.list[1].main.temp_min + '°';
    
    // day 2, 5 day forecast
    laterDate2.innerText = weather5Day.list[9].dt_txt;
    weatherIcon2.innerText = weather5Day.list[9].weather[0].icon;
    maxTemp2.innerText = weather5Day.list[9].main.temp_max + '°';
    minTemp2.innerText = weather5Day.list[9].main.temp_min + '°';

    // day 3, 5 day forecast
    laterDate3.innerText = weather5Day.list[17].dt_txt;
    weatherIcon3.innerText = weather5Day.list[17].weather[0].icon;
    maxTemp3.innerText = weather5Day.list[17].main.temp_max + '°';
    minTemp3.innerText = weather5Day.list[17].main.temp_min + '°';

    // day 4, 5 day forecast 
    laterDate4.innerText = weather5Day.list[25].dt_txt;
    weatherIcon4.innerText = weather5Day.list[25].weather[0].icon;
    maxTemp4.innerText = weather5Day.list[25].main.temp_max + '°';
    minTemp4.innerText = weather5Day.list[25].main.temp_min + '°';

    // day 5, 5 day forecast
    laterDate5.innerText = weather5Day.list[33].dt_txt;
    weatherIcon5.innerText = weather5Day.list[33].weather[0].icon;
    maxTemp5.innerText = weather5Day.list[33].main.temp_max + '°';
    minTemp5.innerText = weather5Day.list[33].main.temp_min + '°';
    console.log(Date());

}


function errorFunc(error) {
    console.log(error.message);
}

async function WeatherData(latitude, longitude) {

    const promise = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=01f84bef08f4ad88f46b58518d50114c`)
    const data = await promise.json();

    return data;
};

async function CurrentWeather(latitude, longitude) {

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=01f84bef08f4ad88f46b58518d50114c`)
    const data = await promise.json();

    return data;
}

async function SearchInput(cityName, stateCode, countryCode) {
    
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=5&appid=01f84bef08f4ad88f46b58518d50114c`)
    const data = await promise.json();

    return data;
}

function findCity() {
    let cityInput = userInput.value.toLowerCase();

    




}


searchBtn.addEventListener('click', function(e) {
    findCity();
})

SearchInput();
CurrentWeather();
WeatherData();










