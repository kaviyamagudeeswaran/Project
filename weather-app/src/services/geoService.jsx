import axios from "axios";

const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const getCitySuggestions = async (query) => {
  try {
    const response = await axios.get(GEO_API_URL, {
      params: { namePrefix: query },
      headers: {
        "X-RapidAPI-Key": GEO_API_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching city suggestions:", error);
    return [];
  }
};
