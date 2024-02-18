import APIKEY from "./APIKEY.js";

let locationVar = "New York";
async function getWeather(locationVar) {
    const weatherJson = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${locationVar}`);
    let weatherData = await weatherJson.json();
    console.log(weatherData)

    const weatherDiv = document.querySelector("#weatherDiv");
    const tempSpan = document.querySelector("#temp");
    const status = document.querySelector("#status");
    const windSpeed = document.querySelector("#windSpeed");


    tempSpan.innerText = weatherData.current.temp_c;
    status.innerText = weatherData.current.condition.text;
    windSpeed.innerText = weatherData.current.wind_mph + "mph"
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const locationInput = document.querySelector("#locationInput");
    getWeather(locationInput.value);
})