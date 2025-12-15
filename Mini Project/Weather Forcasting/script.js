const key = "";

async function getweather() {
  const city = document.getElementById("city").value;
  const { latitude, longitude } = await getGeoLocation(city); // destructuring objects

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
  );

  const data = await response.json();

  document.getElementById("weatherData").innerHTML = `
       <div>
             <p>
                Temperature : ${Math.floor(data.main.temp - 273.14)} ° C
            </p>
            <p>
                Humidity : ${data.main.humidity}%            </p>
            <p>
                Description : ${data.weather[0].description}
            </p>
           </div>

            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="weatherIcon">

  `;
}

async function getGeoLocation(city) {
  const locations = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
  );

  const locationData = await locations.json();

  const latitude = locationData.results[0].latitude;
  const longitude = locationData.results[0].longitude;

  return { latitude, longitude }; // structuring objects
}

/*

icon = 
humdity = 
description =
temp = 
name = 


*/
