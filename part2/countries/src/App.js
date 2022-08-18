import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specific another filter</p>;
  }

  return (
    <>
      <ul>
        {countries.map((country) => {
          return <li>{country.name.common}</li>;
        })}
      </ul>
    </>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const hook = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      const countryData = response.data;
      setCountries(countryData);
    });
  };

  useEffect(hook, []);

  return (
    <>
      <CountryList countries={countries} />
    </>
  );
};

export default App;
