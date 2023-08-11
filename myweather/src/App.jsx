import { useState } from "react";
import "./App.css";

const api = {
  key: "050d63aeb0692c8d77ebbfc79948cca3",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}${search}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        debugger;
      });
  };

  return (
    <>
      <h1>Weather</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>
      {weather?.main && weather?.weather && (
        <div>
          <p>{weather.name}</p>
          {Math.round(weather.main.temp)} °C /{" "}
          {Math.round((weather.main.temp * 9) / 5 + 32)} °F
          <p>{<p>{weather.weather[0].description}</p>}</p>
        </div>
      )}
    </>
  );
}

export default App;
