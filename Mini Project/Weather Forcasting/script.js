const key = "b16eeefb7687b35f4f79b3c9057e71ca";

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
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`
  );

  const locationData = await locations.json();

  const latitude = locationData[0].lat;
  const longitude = locationData[0].lon;

  return { latitude, longitude }; // structuring objects
}

/*

icon = 
humdity = 
description =
temp = 
name = 


*/
