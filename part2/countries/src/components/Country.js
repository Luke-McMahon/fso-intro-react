import React, { useState } from "react";

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
        <img
          style={{ maxWidth: "300px" }}
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
      </>
    );
  }
};

export default Country;
