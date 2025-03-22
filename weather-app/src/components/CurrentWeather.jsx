import { useState, useEffect } from "react";
import { getWeatherData } from "../services/weatherService";

const CurrentWeather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      getWeatherData(lat, lon).then(setWeather);
    }
  }, [lat, lon]);

  return (
    <div className="weather-container">
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>💨 Wind: {weather.wind.speed} km/h</p>
          <p>🌧️ Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default CurrentWeather;
