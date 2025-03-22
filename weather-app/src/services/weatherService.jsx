import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(`${WEATHER_URL}/weather`, {
      params: {
        lat,
        lon,
        units: "metric",
        appid: WEATHER_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
