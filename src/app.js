function displayTemperature(response) {
 console.log(response.data.main.temp);   
}

let apiKey = "ce2a122a9141d0af01c35f1399c43afe";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature)