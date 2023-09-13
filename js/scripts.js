// Var and elements selectors
const apiKey = "b5d9b65689d4af6592fd0dcdfc1d96ee";
const apiCountryURL = "https://www.countryflagicons.com/FLAT/64/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

// functions
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json();

    console.log(data)
};


const showWeatherData = async (city) => {
    getWeatherData(city);
};


// Events
searchBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
    
});