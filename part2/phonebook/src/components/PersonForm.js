import React, { useState } from "react";

import phonebookService from "../services/phonebook";

const PersonForm = ({ persons, setPersons, updatePerson, onUpdate }) => {
  const [newName, setNewName] = useState("Greg Daniels");
  const [newNumber, setNewNumber] = useState("39-44-53239253");

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };

    const existing = persons.find((person) => person.name === newName);
    if (existing) {
      const changed = { ...existing, number: newNumber };
      updatePerson(existing, changed);
      return;
    }

    phonebookService
      .create(personObj)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));

        onUpdate(`Added ${newName}`, true);

        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        onUpdate(`${error.response.data.error}`, false);
      });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
