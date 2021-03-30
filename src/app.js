function displayTemperature(response) {
 console.log(response.data.main.temp);
 let temperatureElement = document.querySelector("#temperature");
 let cityElement = document.querySelector("#city");
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity")
 let speedElement = document.querySelector("#speed")
 temperatureElement.innerHTML = Math.round(response.data.main.temp);
 cityElement.innerHTML = response.data.name; 
 descriptionElement.innerHTML = response.data.weather[0].description;
 humidityElement.innerHTML = response.data.main.humidity;
 speedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "ce2a122a9141d0af01c35f1399c43afe";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature)