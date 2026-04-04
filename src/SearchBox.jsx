import { useState } from "react";
import "./SearchBox.css";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox({ getWeatherInfo, setError }) {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    try {
      const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      getWeatherInfo({
        city: data.name,
        temp: Math.round(data.main.temp),
        temp_max: Math.round(data.main.temp_max),
        temp_min: Math.round(data.main.temp_min),
        humidity: data.main.humidity,
        feels_like: Math.round(data.main.feels_like),
        description: data.weather[0].description,
        wind_speed: data.wind.speed,
      });
      setError(false);
    } catch {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather();
  };

  return (
    <div className="SearchBox">
      <form className="SearchBox-form" onSubmit={handleSubmit}>
        <input
          className="SearchBox-input"
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="SearchBox-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}