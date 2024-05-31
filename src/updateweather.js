import "./App.css";
import { useState } from "react";
const api = {
  key: "af8fc391df61ecd6a1031a489efbb94b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Updateweather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
      setSearch('')
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>

            {/* weather image */}
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather"/>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Updateweather;
