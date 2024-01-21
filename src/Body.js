import React, { useState } from "react";
import "./Body.css";
import axios from "axios";

export default function Body() {
  let [weather, setWeather] = useState("");

  function showTemperature(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let apiKey = "e6c2364656962bdcb16bc352fc42569a";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);

  return (
    <div className="Body">
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-current-region">
              <span className="weather-app-city">Kyiv</span>
              <br />
              <span className="weather-app-country">{weather.country}</span>
            </h1>
            <p className="weather-app-details">
              <span>Sunday, 14:14</span>,{" "}
              <span className="weather-app-details-description">
                {weather.description}
              </span>
              <br />
              Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
              <strong>{weather.wind}km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div>
              <img src={weather.icon} alt="" />
            </div>
            <div className="weather-app-temperature">
              {Math.round(weather.temperature)}
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
      </main>
    </div>
  );
}
