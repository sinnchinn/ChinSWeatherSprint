import {apiKey} from './environment.js'

import { favoriteArray } from './app.js';

let injectHere = document.getElementById('injectHere');

async function MakeCard(cityName, stateName) {

        const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}, ${stateName}&limit=1&appid=${apiKey}`)
        const data = await promise.json();
        console.log(data);

        let latitude = data[0].lat;
        let longitude = data[0].lon;
        const promise2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`)
        const data2 = await promise2.json();

    console.log(data2)    

    //innerDiv1
    let p1 = document.createElement('p')
    p1.className = "same favFont";
    p1.id = "favoritesCity";
    p1.textContent = data[0].name + ', ' + data[0].state;

    let button1 = document.createElement('button')
    button1.style ="margin-left: 20px; background-color: #FFF9C8; border-radius: 30px; width: 30px;";
    button1.className = "same removeBtn";
    button1.textContent = "-";
    button1.addEventListener('click', function(e) {
        let index = favoriteArray.indexOf(cityName);
        favoriteArray.splice(index, 1)

        localStorage.setItem('favorites', JSON.stringify(favoriteArray));

        injectHere.innerText = "";
        console.log('i work');
        for(let i = 0; i < favoriteArray.length; i++){
            console.log('favorites');
            MakeCard(favoriteArray[i]);
        }
    })

    let innerDiv1 = document.createElement('div');
    
    innerDiv1.appendChild(p1);
    innerDiv1.appendChild(button1);

    //img and p tag
    let img2 = document.createElement("img");
    img2.id = "favoritesIcon";
    img2.src = "";
    img2.alt = "";

    let p2 = document.createElement("p");
    p2.id = "favoritesCurrentWeather";
    p2.className = "same favFont2 center"; 
    p2.textContent = data2.main.temp + "°";

    //innerDiv2
    let p3 = document.createElement('p');
    p3.className = "same favFont";
    p3.textContent = "LO:";

    let img3 = document.createElement('img');
    img3.style = "width: 120px; margin-right: 20px; margin-left: 25px;";
    img3.id = "favoritesWeatherBar";
    img3.className = "same";
    img3.src = "../assets/weatherbar.png"

    let p4 = document.createElement('p');
    p4.className = "same favFont";
    p4.textContent = "HIGH:";

    let innerDiv2 = document.createElement('div');
    innerDiv2.style = "text-align: center;";

    innerDiv2.appendChild(p3);
    innerDiv2.appendChild(img3);
    innerDiv2.appendChild(p4);

    //p tags
    let p5 = document.createElement('p');
    p5.id = "favMinTemp";
    p5.className = "same favFont3";
    p5.textContent = data2.main.temp_min + "°";

    let p6 = document.createElement("p");
    p6.id = "favMaxTemp";
    p6.style = "margin-left: 140px;";
    p6.className = "same favFont3";
    p6.textContent = data2.main.temp_max + "°";

    //column div
    let columnDiv = document.createElement('div');
    columnDiv.className = "col-2 favoritesBorder same";
    columnDiv.style = "margin: 25px;"

    columnDiv.appendChild(innerDiv1);
    columnDiv.appendChild(img2);
    columnDiv.appendChild(p2);
    columnDiv.appendChild(innerDiv2);
    columnDiv.appendChild(p5);
    columnDiv.appendChild(p6);

    injectHere.appendChild(columnDiv)


}

{/* <div id="injectHere" class="container">
        <div class="row">
            <div class="col-2 favoritesBorder">
                <div>
                    <p class="same favFont" id="favoritesCity">i go here</p>
                    <button style="margin-left: 10px; background-color: #FFF9C8; border-radius: 30px; width: 30px;"class="same">-</button>
                </div>
                <img id="favoritesIcon" class="same" src="" alt="">
                <p id="favoritesCurrentWeather" class="same favFont2">00</p>
                <div style="text-align: center;">
                    <p class="same favFont">LO:</p>
                    <img style="width: 100px;" id="favoritesWeatherBar" class="same" src="../assets/weatherbar.png"
                        alt="">
                    <p class="same favFont">HIGH:</p>
                </div>
                <p id="favMinTemp" class="same favFont3">00</p>
                <p id="favMaxTemp" style="margin-left: 100px;" class="same favFont3">00</p>
            </div>
        </div>
    </div> */}

export {MakeCard}
