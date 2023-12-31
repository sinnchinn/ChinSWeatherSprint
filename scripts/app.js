import {apiKey} from './environment.js'

import{MakeCard} from './elements.js'

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
let userInput = document.getElementById('userInput');
let searchBtn = document.getElementById('searchBtn');
let currentLocation = document.getElementById('currentLocation');
let currentDate = document.getElementById('currentDate');
let laterDate1 = document.getElementById('laterDate1');
let laterDate2 = document.getElementById('laterDate2');
let laterDate3 = document.getElementById('laterDate3');
let laterDate4 = document.getElementById('laterDate4');
let laterDate5 = document.getElementById('laterDate5');
let currentTemp = document.getElementById('currentTemp')
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

let favoriteArray = [];

async function success(position) {

    //location
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const weather5Day = await WeatherData(latitude, longitude);
    const weatherLocal = await CurrentWeather(latitude, longitude);

    //dates
    const now = new Date();
    let later1 = new Date(weather5Day.list[1].dt_txt);
    let later2 = new Date(weather5Day.list[9].dt_txt);
    let later3 = new Date(weather5Day.list[17].dt_txt);
    let later4 = new Date(weather5Day.list[25].dt_txt);
    let later5 = new Date(weather5Day.list[33].dt_txt);

    // // icons
    let dataIcon = weatherLocal.weather[0].icon;
    let dataIcon1 = weather5Day.list[1].weather[0].icon;
    let dataIcon2 = weather5Day.list[9].weather[0].icon;
    let dataIcon3 = weather5Day.list[17].weather[0].icon;
    let dataIcon4 = weather5Day.list[25].weather[0].icon;
    let dataIcon5 = weather5Day.list[33].weather[0].icon;

    //all switches for icons
    switch (dataIcon) {
        case '04d':
            document.getElementById('currentWeatherIcon').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('currentWeatherIcon').src = `../assets/overcastclouds.png`
            break;
        case '01n':
            document.getElementById('currentWeatherIcon').src = `../assets/nightsky.png`
            break;
        case '01d':
            document.getElementById('currentWeatherIcon').src = `../assets/clearsky.png`
            break;
        case '02d': 
            document.getElementById('currentWeatherIcon').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('currentWeatherIcon').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('currentWeatherIcon').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('currentWeatherIcon').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('currentWeatherIcon').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('currentWeatherIcon').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('currentWeatherIcon').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('currentWeatherIcon').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('currentWeatherIcon').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('currentWeatherIcon').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon1) {
        case '04d':
            document.getElementById('icon1').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon1').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon1').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon1').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon1').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon1').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon1').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon1').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon1').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon1').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon1').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon1').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon1').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon1').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon2) {
        case '04d':
            document.getElementById('icon2').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon2').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon2').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon2').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon2').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon2').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon2').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon2').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon2').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon2').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon2').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon2').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon2').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon2').src = `../assets/windy.png`
            break;
        default:
            break;
    }
    
    switch (dataIcon3) {
        case '04d':
            document.getElementById('icon3').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon3').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon3').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon3').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon3').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon3').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon3').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon3').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon3').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon3').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon3').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon3').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon3').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon3').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon4) {
        case '04d':
            document.getElementById('icon4').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon4').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon4').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon4').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon4').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon4').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon4').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon4').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon4').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon4').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon4').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon4').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon4').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon4').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon5) {
        case '04d':
            document.getElementById('icon5').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon5').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon5').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon5').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon5').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon5').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon5').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon5').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon5').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon5').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon5').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon5').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon5').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon5').src = `../assets/windy.png`
            break;
        default:
            break;
    }
    

    console.log('our latitude: ' + position.coords.latitude);
    console.log('out longitude: ' + position.coords.longitude);

    console.log(weather5Day);
    console.log(weatherLocal);


    // current weather forecast
    currentDate.innerText = now.toDateString();
    currentLocation.innerText = weatherLocal.name.toUpperCase();
    currentTemp.innerText = Math.round(weatherLocal.main.temp) + '°';
    currentMaxTemp.innerText = Math.round(weatherLocal.main.temp_max) + '°';
    currentMinTemp.innerText = Math.round(weatherLocal.main.temp_min) + '°';
    feelsLike.innerText = Math.round(weatherLocal.main.feels_like) + '°';
    humidity.innerText = Math.round(weatherLocal.main.humidity) + '%';
    iconData.innerText = weatherLocal.weather[0].description;

    // day 1, 5 day forecast
    laterDate1.innerText = later1.toDateString();
    maxTemp1.innerText = Math.round(weather5Day.list[1].main.temp_max) + '°';
    minTemp1.innerText = Math.round(weather5Day.list[1].main.temp_min) + '°';
    
    // day 2, 5 day forecast
    laterDate2.innerText = later2.toDateString();
    maxTemp2.innerText = Math.round(weather5Day.list[9].main.temp_max) + '°';
    minTemp2.innerText = Math.round(weather5Day.list[9].main.temp_min) + '°';

    // day 3, 5 day forecast
    laterDate3.innerText = later3.toDateString();
    maxTemp3.innerText = Math.round(weather5Day.list[17].main.temp_max) + '°';
    minTemp3.innerText = Math.round(weather5Day.list[17].main.temp_min) + '°';

    // day 4, 5 day forecast 
    laterDate4.innerText = later4.toDateString();
    maxTemp4.innerText = Math.round(weather5Day.list[25].main.temp_max) + '°';
    minTemp4.innerText = Math.round(weather5Day.list[25].main.temp_min) + '°';

    // day 5, 5 day forecast
    laterDate5.innerText = later5.toDateString();
    maxTemp5.innerText = Math.round(weather5Day.list[33].main.temp_max) + '°';
    minTemp5.innerText = Math.round(weather5Day.list[33].main.temp_min) + '°';    

}


function errorFunc(error) {
    console.log(error.message);
    WeatherData(37.9577, 121.2908);
    CurrentWeather(37.9577, 121.2908)
}

async function WeatherData(latitude, longitude) {

    const promise = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`)
    const data = await promise.json();

    return data;
};

async function CurrentWeather(latitude, longitude) {

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`)
    const data = await promise.json();

    return data;
}


async function SearchInput(cityName, stateName) {
    
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateName}&limit=5&appid=${apiKey}`)
    const data = await promise.json();

    console.log(data);
    currentLocation.textContent = `${data[0].name.toUpperCase()}, ${data[0].state.toUpperCase()}`;

    let latitude = data[0].lat;
    let longitude = data[0].lon;
    const weather5Day = await WeatherData(latitude, longitude);
    const weatherLocal = await CurrentWeather(latitude, longitude);

    //dates
    const now = new Date();
    let later1 = new Date(weather5Day.list[1].dt_txt);
    let later2 = new Date(weather5Day.list[9].dt_txt);
    let later3 = new Date(weather5Day.list[17].dt_txt);
    let later4 = new Date(weather5Day.list[25].dt_txt);
    let later5 = new Date(weather5Day.list[33].dt_txt);


    // current weather forecast
    currentDate.innerText = now.toDateString();
    currentTemp.innerText = Math.round(weatherLocal.main.temp) + '°';
    currentMaxTemp.innerText = Math.round(weatherLocal.main.temp_max) + '°';
    currentMinTemp.innerText = Math.round(weatherLocal.main.temp_min) + '°';
    feelsLike.innerText = Math.round(weatherLocal.main.feels_like) + '°';
    humidity.innerText = Math.round(weatherLocal.main.humidity) + '%';
    iconData.innerText = weatherLocal.weather[0].description;

    // day 1, 5 day forecast
    laterDate1.innerText = later1.toDateString();
    maxTemp1.innerText = Math.round(weather5Day.list[1].main.temp_max) + '°';
    minTemp1.innerText = Math.round(weather5Day.list[1].main.temp_min) + '°';
    
    // day 2, 5 day forecast
    laterDate2.innerText = later2.toDateString();
    maxTemp2.innerText = Math.round(weather5Day.list[9].main.temp_max) + '°';
    minTemp2.innerText = Math.round(weather5Day.list[9].main.temp_min) + '°';

    // day 3, 5 day forecast
    laterDate3.innerText = later3.toDateString();
    maxTemp3.innerText = Math.round(weather5Day.list[17].main.temp_max) + '°';
    minTemp3.innerText = Math.round(weather5Day.list[17].main.temp_min) + '°';

    // day 4, 5 day forecast 
    laterDate4.innerText = later4.toDateString();
    maxTemp4.innerText = Math.round(weather5Day.list[25].main.temp_max) + '°';
    minTemp4.innerText = Math.round(weather5Day.list[25].main.temp_min) + '°';

    // day 5, 5 day forecast
    laterDate5.innerText = later5.toDateString();
    maxTemp5.innerText = Math.round(weather5Day.list[33].main.temp_max) + '°';
    minTemp5.innerText = Math.round(weather5Day.list[33].main.temp_min) + '°';


    // icons
    let dataIcon = weatherLocal.weather[0].icon;
    let dataIcon1 = weather5Day.list[1].weather[0].icon;
    let dataIcon2 = weather5Day.list[9].weather[0].icon;
    let dataIcon3 = weather5Day.list[17].weather[0].icon;
    let dataIcon4 = weather5Day.list[25].weather[0].icon;
    let dataIcon5 = weather5Day.list[33].weather[0].icon;

    //all switches for icons
    switch (dataIcon) {
        case '04d':
            document.getElementById('currentWeatherIcon').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('currentWeatherIcon').src = `../assets/overcastclouds.png`
            break;
        case '01n':
            document.getElementById('currentWeatherIcon').src = `../assets/nightsky.png`
            break;
        case '01d':
            document.getElementById('currentWeatherIcon').src = `../assets/clearsky.png`
            break;
        case '02d': 
            document.getElementById('currentWeatherIcon').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('currentWeatherIcon').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('currentWeatherIcon').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('currentWeatherIcon').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('currentWeatherIcon').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('currentWeatherIcon').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('currentWeatherIcon').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('currentWeatherIcon').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('currentWeatherIcon').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('currentWeatherIcon').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('currentWeatherIcon').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon1) {
        case '04d':
            document.getElementById('icon1').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon1').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon1').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon1').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon1').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon1').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon1').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon1').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon1').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon1').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon1').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon1').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon1').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon1').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon1').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon2) {
        case '04d':
            document.getElementById('icon2').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon2').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon2').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon2').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon2').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon2').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon2').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon2').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon2').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon2').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon2').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon2').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon2').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon2').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon2').src = `../assets/windy.png`
            break;
        default:
            break;
    }
    
    switch (dataIcon3) {
        case '04d':
            document.getElementById('icon3').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon3').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon3').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon3').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon3').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon3').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon3').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon3').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon3').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon3').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon3').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon3').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon3').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon3').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon3').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon4) {
        case '04d':
            document.getElementById('icon4').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon4').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon4').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon4').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon4').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon4').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon4').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon4').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon4').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon4').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon4').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon4').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon4').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon4').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon4').src = `../assets/windy.png`
            break;
        default:
            break;
    }

    switch (dataIcon5) {
        case '04d':
            document.getElementById('icon5').src = `../assets/overcastclouds.png`
            break;
        case '04n':
            document.getElementById('icon5').src = `../assets/overcastclouds.png`
            break;
        case '01d':
            document.getElementById('icon5').src = `../assets/clearsky.png`
            break;
        case '01n':
            document.getElementById('icon5').src = `../assets/nightsky.png`
            break;
        case '02d': 
            document.getElementById('icon5').src = `../assets/fewclouds.png`
            break;
        case '02n':
            document.getElementById('icon5').src = `../assets/fewclouds.png`
            break;
        case '03d':
            document.getElementById('icon5').src = `../assets/scatteredclouds.png`
            break;
        case '03n':
            document.getElementById('icon5').src = `../assets/scatteredclouds.png`
            break;
        case '09d':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '10d':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '09n':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '10n':
            document.getElementById('icon5').src = `../assets/rain.png`
            break;
        case '11d':
            document.getElementById('icon5').src = `../assets/thunder.png`
            break;
        case '11n':
            document.getElementById('icon5').src = `../assets/thunder.png`
            break;
        case '13d':
            document.getElementById('icon5').src = `../assets/snow.png`
            break;
        case '13n':
            document.getElementById('icon5').src = `../assets/snow.png`
            break;
        case '50d': 
            document.getElementById('icon5').src = `../assets/windy.png`
            break;
        case '50n':
            document.getElementById('icon5').src = `../assets/windy.png`
            break;
        default:
            break;
    }   

}



if(localStorage.getItem('favorites')) {
    favoriteArray = JSON.parse(localStorage.getItem('favorites'));
    getFavorites();
}

favoriteBtn.addEventListener('click', function(e) {

    if(userInput.value === '') {
        return;
    }

    favoriteArray.push(userInput.value);
    userInput.value = '';
    // console.log(userInput.value);
    console.log(favoriteArray);

    localStorage.setItem('favorites', JSON.stringify(favoriteArray));

})

searchBtn.addEventListener('click', async function(e) {
    await SearchInput(userInput.value);
    console.log(userInput.value);
});



function getFavorites() {

    console.log(favoriteArray.length);

    for(let i = 0; i < favoriteArray.length; i++){
        console.log('favorites');
        MakeCard(favoriteArray[i]);
    }

}

// CurrentWeather();
// WeatherData();

export {favoriteArray, CurrentWeather}