import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let COLD =
    "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAIN =
    "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let img =
    info.humidity >= 80 || info.description.toLowerCase().includes("rain")
      ? RAIN
      : info.temp <= 15
        ? COLD
        : HOT;

  return (
    <div className="InfoBox">
      <Card sx={{ minWidth: 315 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>{info.city}</b>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="div"
          >
            <div className="weather-card">
              <p>
                Weather feels like <b>{info.feels_like}°C</b> with{" "}
                <b>{info.description}</b>.
              </p>

              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <DeviceThermostatIcon sx={{ color: "red" }} />
                Temperature: {info.temp}&deg;C
              </p>

              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ArrowUpwardIcon sx={{ color: "darkred" }} />
                Max: {info.temp_max}&deg;C |
                <ArrowDownwardIcon sx={{ color: "blue" }} />
                Min: {info.temp_min}&deg;C
              </p>

              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <WaterDropIcon sx={{ color: "dodgerblue" }} />
                Humidity: {info.humidity}%
              </p>

              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <AirIcon sx={{ color: "gray" }} />
                Wind Speed: {info.wind_speed} m/s
              </p>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
