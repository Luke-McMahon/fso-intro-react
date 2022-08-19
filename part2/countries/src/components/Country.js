import axios from "axios";
import React, { useEffect, useState } from "react";

const Country = ({ country, countries }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});

  const toggleInfo = () => setShowInfo(!showInfo);

  const apiKey = process.env.REACT_APP_API_KEY;
  const lat = country.latlng[0];
  const lon = country.latlng[1];
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  if (showInfo) {
    axios
      .get(weatherURL)
      .then((response) => {
        const weatherObj = {
          weather: response.data.weather[0].description,
          temperature: response.data.main.temp,
        };

        console.log(weatherObj);

        setWeatherInfo(weatherObj);
      })
      .catch((e) => {
        console.log(weatherInfo);
        console.log(e);
      });
  }

  if (!showInfo) {
    return (
      <p>
        {country.name.common} <button onClick={() => toggleInfo()}>Show</button>
      </p>
    );
  }

  if (showInfo) {
    return (
      <>
        <h1>
          {country.name.common}{" "}
          <button onClick={() => toggleInfo()}>Hide</button>
        </h1>
        <div>
          <p>capital {country.capital[0]}</p>
          <p>area {country.area}</p>
        </div>
        <div>
          <h4>Languages:</h4>
          <ul>
            {Object.entries(country.languages).map((key, value) => {
              return <li key={key[0]}>{key[1]}</li>;
            })}
          </ul>
        </div>
        <img
          style={{ maxWidth: "300px" }}
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
        <h4>Weather in {country.name.common}</h4>
        {weatherInfo !== {} ? (
          <p>Unable to fetch weather information...</p>
        ) : (
          <p>Temperature: {weatherInfo.weather} celcius</p>
        )}
      </>
    );
  }
};

export default Country;
