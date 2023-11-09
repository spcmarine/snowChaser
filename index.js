const apiKey = null
let resort = ""

const buttonClicked = document.querySelector("#submit-button");
const userInput = document.querySelector("#resort-name-input");

buttonClicked.addEventListener('click', () => {
    resort = userInput.value
    getData();

})

const getData = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${resort}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
        displayWeather(data);
        // console.log(data.name)
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });

    
}




const displayWeather = (data) => {
    let temp = data.main.temp;
    let feelsLike = data.main.feels_like;
    let minTemp = data.main.temp_min;
    let maxTemp = data.main.temp_max;
    let resortName = data.name;
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    let windSpeed = data.wind.speed;
    
    document.querySelector("#resort-name").innerText = resortName
    document.querySelector("#weather-icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    document.querySelector("#weather-description").innerText = "Current Weather: " + description
    document.querySelector("#current-temp").innerText = "Temperature: " + temp +"°"
    document.querySelector("#feels-like-temp").innerText = "Feels like: " + feelsLike +"°"
    document.querySelector("#min-temp").innerText = "Min temp: " + minTemp +"°"
    document.querySelector("#max-temp").innerText = "Max temp: " + maxTemp +"°"
    document.querySelector("#wind-speed").innerText = "Wind speed: " + windSpeed +"mph"

}

