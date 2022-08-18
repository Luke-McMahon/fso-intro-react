import React from "react";

const Phonebook = ({ persons, showFilter }) => {
  let people = persons.filter((person) => {
    let personTitleCase = person.name.toUpperCase();
    return personTitleCase.includes(showFilter.toUpperCase());
  });

  return (
    <>
      {people.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default Phonebook;
