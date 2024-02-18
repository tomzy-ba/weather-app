import APIKEY from "./APIKEY.js";

async function getWeather(locationVar) {
    document.querySelector("#loading").classList.remove("hidden")
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2 seconds delay
    document.querySelector("#loading").classList.add("hidden")
    const weatherJson = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${locationVar}`);
    let weatherData = await weatherJson.json();

    const weatherDiv = document.querySelector("#weatherDiv");
    const tempSpan = document.querySelector("#temp");
    const status = document.querySelector("#status");
    const windSpeed = document.querySelector("#windSpeed");


    tempSpan.innerText = weatherData.current.temp_c;
    status.innerText = weatherData.current.condition.text;
    windSpeed.innerText = weatherData.current.wind_mph + "mph"

};

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const locationInput = document.querySelector("#locationInput");
    getWeather(locationInput.value)
})