import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 12,
    temp_max: 18,
    temp_min: 7,
    humidity: 98,
    feels_like: 16,
    description: "Hazy / Cloudy",
    wind_speed: 1.0,
  });

  const [error, setError] = useState(false);

  return (
    <div className="WeatherApp">
      <h2 className="WeatherApp-title">Weather Widget</h2>
      <SearchBox getWeatherInfo={setWeatherInfo} setError={setError} error={error} />
      {error && <p className="WeatherApp-error">City not found. Please try again.</p>}
      {!error && <InfoBox info={weatherInfo} />}
    </div>
  );
}