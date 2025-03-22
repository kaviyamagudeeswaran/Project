import { useState } from "react";
import { getCitySuggestions } from "../services/geoService";

const SearchBar = ({ onCitySelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const cities = await getCitySuggestions(e.target.value);
      setSuggestions(cities);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {suggestions.map((city) => (
          <li
            key={city.id}
            onClick={() => onCitySelect(city.latitude, city.longitude)}
          >
            {city.city}, {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
