import React from "react";

import phonebookService from "../services/phonebook";

const Phonebook = ({ persons, showFilter, removeEntry }) => {
  let people = persons.filter((person) => {
    let personTitleCase = person.name.toUpperCase();
    return personTitleCase.includes(showFilter.toUpperCase());
  });

  return (
    <>
      {people.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => removeEntry(person)}>delete</button>
        </p>
      ))}
    </>
  );
};

export default Phonebook;
