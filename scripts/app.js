navigator.geolocation.getCurrentPosition(success, errorFunc);

function success(position) {
    console.log('our latitude: ' + position.coords.latitude);
    console.log('out longitude: ' + position.coords.longitude);
}

function errorFunc(error) {
    console.log(error.message);
}


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
let todayDate = document.getElementById('todayDate');
let weatherIcon = document.getElementById('weatherIcon');
let maxTemp = document.getElementById('maxTemp');
let minTemp = document.getElementById('minTemp');
let feelsLike = document.getElementById('feelsLike');
let humidity = document.getElementById('humidity');






