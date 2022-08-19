import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ country, countries }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo(!showInfo);

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
        <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      </>
    );
  }
};

const CountryList = ({ countries, searchParam }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specific another filter</p>;
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return (
    <>
      {countries.map((country) => {
        return <Country country={country} countries={countries} />;
      })}
    </>
  );
};

const Search = (props) => {
  const filteredCountries = (e) => {
    props.setSearchParam(e.target.value);
  };

  return (
    <>
      Find countries{" "}
      <input value={props.searchParam} onChange={filteredCountries} />
    </>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchParam, setSearchParam] = useState("swi");

  const hook = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${searchParam}`)
      .then((response) => {
        const countryData = response.data;
        setCountries(countryData);
      });
  };

  useEffect(hook, [searchParam]);

  return (
    <>
      <Search searchParam={searchParam} setSearchParam={setSearchParam} />
      <CountryList countries={countries} searchParam={searchParam} />
    </>
  );
};

export default App;
