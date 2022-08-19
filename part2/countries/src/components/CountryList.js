import Country from "./Country";

const CountryList = ({ countries, searchParam }) => {
  if (countries.length === 0) {
    return <p>Loading...</p>;
  }
  console.log(countries);
  if (countries.length > 10) {
    return <p>Too many matches, specific another filter</p>;
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return (
    <>
      {countries.map((country) => {
        return (
          <Country key={country.cca2} country={country} countries={countries} />
        );
      })}
    </>
  );
};

export default CountryList;
