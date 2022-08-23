import { useState, useEffect } from "react";

import phonebookService from "./services/phonebook";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Phonebook from "./components/Phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [showFilter, setShowFilter] = useState("");

  const hook = () => {
    phonebookService.getAll().then((people) => {
      setPersons(people);
    });
  };

  useEffect(hook, []);

  const confirm = (label) => {
    return window.confirm(label);
  };

  const deleteEntry = (person) => {
    const confirmation = window.confirm(`Delete ${person.name}?`);

    if (confirmation) {
      phonebookService
        .deletePerson(person)
        .then((people) => {
          setPersons(persons.filter((p) => p.id !== person.id));
        })
        .catch((e) => {
          alert(e);
        });
    }
  };

  const updateEntry = (person, changed) => {
    if (
      confirm(
        `${person.name} already exists in the phonebook, replace old number with a new one?`
      )
    ) {
      phonebookService
        .update(person.id, changed)
        .then((updated) => {
          setPersons(persons.map((p) => (p.id !== person.id ? p : updated)));
        })
        .catch((e) => {
          alert(e);
        });
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        updatePerson={(p, c) => updateEntry(p, c)}
      />
      <h3>Numbers</h3>
      <Phonebook
        persons={persons}
        showFilter={showFilter}
        removeEntry={(p) => deleteEntry(p)}
      />
    </>
  );
};

export default App;
