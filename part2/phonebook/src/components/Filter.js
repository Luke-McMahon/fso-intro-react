import React from "react";

const Filter = ({ showFilter, setShowFilter }) => {
  const filteredPersons = (e) => {
    setShowFilter(e.target.value);
  };

  return (
    <p>
      filter shown with <input value={showFilter} onChange={filteredPersons} />
    </p>
  );
};

export default Filter;
