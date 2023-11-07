const apiKey = require('./api')
const resort = "Morzine";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${resort}&appid=${apiKey}`;


// let weatherData = []

// const getData = () => {
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => weatherData.push(data))
// }

// getData();

// console.log(weatherData)

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData.weather[0].main);
  });

console.log("Requesting weather data");


