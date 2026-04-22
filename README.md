# 🌤️ Weather Widget

A clean and responsive weather application built with React and Vite that displays real-time weather data for any city in the world.

---

## Features

- Search weather by city name
- Displays temperature, humidity, wind speed, feels like, max/min temp
- Dynamic background image based on weather condition (hot, cold, rainy)
- Error handling for invalid city names
- Fully responsive dark UI

---

## Tech Stack

- React 18
- Vite
- CSS Modules
- OpenWeatherMap API

---

## Folder Structure

```
weather-widget/
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── WeatherApp.css
│   ├── WeatherApp.jsx
│   ├── SearchBox.css
│   ├── SearchBox.jsx
│   ├── InfoBox.css
│   └── InfoBox.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-widget.git
cd weather-widget
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your OpenWeatherMap API Key

- Go to [https://openweathermap.org/api](https://openweathermap.org/api)
- Sign up for a free account
- Go to [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)
- Copy your API key
- Wait 1–2 hours for the key to activate

### 4. Setup environment variables

Create a `.env` file in the root of your project:

```dotenv
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_api_key_here
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
npm run build
```

---

## Important Notes

- Never push your `.env` file to GitHub
- Add `.env` to your `.gitignore` file
- OpenWeatherMap free plan supports up to 60 calls/minute
- Search by city name only (e.g. London, Mumbai, Tokyo)

---

## License

This project is open source and available under the [MIT License](LICENSE).
