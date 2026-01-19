import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 12,
    temp_max: 18,
    temp_min: 7,
    humidity: 98,
    feels_like: 16,
    description: "Hazy / Cloudy",
    wind_speed: 1.0,
  });

  let [error, setError] = useState(false);

  let getWeatherInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className="WeatherApp">
      <>
        <h2 style={{color: "#000080" }}>
          <b>Weather Widget</b>
        </h2>
        <SearchBox getWeatherInfo={getWeatherInfo} setError={setError} error={error} />
        {error && <h2 style={{ color: "red" }}>City Not found</h2>}
        {!error && <InfoBox info={weatherInfo} />}
      </>
    </div>
  );
}
