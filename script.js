const apiKey = "962b7c4472de87860955f64ee133a9b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

//variables to hold html elements
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const countryElement = document.getElementById("country");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

//event listener to search button
searchButton.addEventListener("click", () => {
    const location = locationInput.value;

    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    //fetching the data and pass to a response variable
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            countryElement.textContent = data.sys.country;
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch((error) => {
            console.error("Error while fetching weather data: ", error);
        });
}
