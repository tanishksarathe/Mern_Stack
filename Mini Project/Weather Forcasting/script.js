const key = "b16eeefb7687b35f4f79b3c9057e71ca";

async function getweather() {
  const city = document.getElementById("city").value;
  const { latitude, longitude } = await getGeoLocation(city); // destructuring objects

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
  );

  const data = await response.json();

  document.getElementById("weatherData").innerHTML = `
           <div
           class="d-flex p-2 flex-column justify-content-center text-light align-items-center"
           >
          <div class="d-flex justify-content-center align-items-center">
             <p class="fs-1 fw-bold text-light"><i class="bi bi-thermometer-half"> ${Math.floor(
             data.main.temp - 273.14
           )}°C</i></p>
           <img src="https://openweathermap.org/img/wn/${
             data.weather[0].icon
           }@4x.png" alt="weatherIcon">
            <p class="fw-bold fs-3">${data.weather[0].main}</p>
          </div>
          <div class="d-flex mt-4 justify-content-between gap-5">
            <p><i class="bi bi-moisture"> Humidity</i> : ${
              data.main.humidity
            }%</p>
            <p>Description : ${data.weather[0].description}</p>
          </div>
          <div class="d-flex mt-1 justify-content-between gap-5">
            <p><i class="bi bi-eyeglasses"> Visibility </i>: ${
              data.visibility
            }</p>
            <p><i class="bi bi-wind">Wind Speed</i> : ${data.wind.speed}</p>
          </div>
        </div>

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
