import "./InfoBox.css";

const COLD = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1169&auto=format&fit=crop";
const HOT = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=882&auto=format&fit=crop";
const RAIN = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop";

export default function InfoBox({ info }) {
  const img =
    info.humidity >= 80 || info.description.toLowerCase().includes("rain")
      ? RAIN
      : info.temp <= 15
      ? COLD
      : HOT;

  return (
    <div className="InfoBox">
      <img className="InfoBox-image" src={img} alt={info.description} />
      <div className="InfoBox-body">
        <div>
          <h3 className="InfoBox-city">{info.city}</h3>
          <p className="InfoBox-description">{info.description}</p>
        </div>

        <div className="InfoBox-grid">
          <div className="InfoBox-stat">
            <span className="InfoBox-stat-label">Temperature</span>
            <span className="InfoBox-stat-value accent-red">{info.temp}°C</span>
          </div>
          <div className="InfoBox-stat">
            <span className="InfoBox-stat-label">Humidity</span>
            <span className="InfoBox-stat-value accent-blue">{info.humidity}%</span>
          </div>
          <div className="InfoBox-stat">
            <span className="InfoBox-stat-label">Max / Min</span>
            <span className="InfoBox-stat-value">{info.temp_max}° / {info.temp_min}°</span>
          </div>
          <div className="InfoBox-stat">
            <span className="InfoBox-stat-label">Wind Speed</span>
            <span className="InfoBox-stat-value accent-gray">{info.wind_speed} m/s</span>
          </div>
        </div>

        <p className="InfoBox-feels">
          Feels like <span>{info.feels_like}°C</span>
        </p>
      </div>
    </div>
  );
}