import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";

const Home = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  return (
    <div className="home-container">
      <h1>Weather Dashboard 🌦️</h1>
      <SearchBar onCitySelect={(lat, lon) => setLocation({ lat, lon })} />
      {location.lat && <CurrentWeather lat={location.lat} lon={location.lon} />}
    </div>
  );
};

export default Home;
