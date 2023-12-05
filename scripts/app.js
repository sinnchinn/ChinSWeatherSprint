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
let currentDate = document.getElementById('todayDate');
let laterDate1 = document.getElementById('laterDate1');
let laterDate2 = document.getElementById('laterDate2');
let laterDate3 = document.getElementById('laterDate3');
let laterDate4 = document.getElementById('laterDate4');
let laterDate5 = document.getElementById('laterDate5');
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

// laterDate1 = '';
laterDate2 = '';
laterDate3 = '';
laterDate4 = '';
laterDate5 = '';


async function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const weather5Day = await WeatherData(latitude, longitude);

    console.log('our latitude: ' + position.coords.latitude);
    console.log('out longitude: ' + position.coords.longitude);

    console.log(weather5Day);

    weatherIcon1.innerText = weather5Day.list[1].weather[0].icon;
    laterDate1.innerText = weather5Day.list[1].dt_txt;
    maxTemp1.innerText = weather5Day.list[1].main.temp_max;
    

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
    const promise = await fetch('https://')
    const data = await promise.json();

    return data;
}


WeatherData();










