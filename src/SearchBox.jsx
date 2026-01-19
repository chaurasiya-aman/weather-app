import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ getWeatherInfo, setError, error }) {
  let [city, setCity] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let fetchWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      let json_res = await res.json();
      let result = {
        city: city,
        temp: json_res.main.temp,
        temp_max: json_res.main.temp_max,
        temp_min: json_res.main.temp_min,
        humidity: json_res.main.humidity,
        feels_like: json_res.main.feels_like,
        description: json_res.weather[0].description,
        wind_speed: json_res.wind.speed,
      };
      setError(false);
      getWeatherInfo(result);
    } catch (e) {
      setError(true);
    }
  };

  let inputHandler = (event) => {
    setCity(event.target.value);
  };

  let searchHandler = (e) => {
    e.preventDefault();
    fetchWeatherInfo();
    setCity("");
  };

  return (
    <div className="SearchBox">
      <form action="" onSubmit={searchHandler}>
        <TextField
          id="city"
          label="City Name"
          onChange={inputHandler}
          variant="outlined"
          value={city}
          required
        />
        <br />
        <br />
        <Button
          variant="contained"
          size="small"
          type="submit"
          sx={{backgroundColor: "#000080" }}
          endIcon={<SearchOutlinedIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
