import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const hook = () => {
    searchParam != ""
      ? axios
          .get(`https://restcountries.com/v3.1/name/${searchParam}`)
          .then((response) => {
            const countryData = response.data;
            setCountries(countryData);
          })
      : axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
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
