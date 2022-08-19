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

export default Search;
