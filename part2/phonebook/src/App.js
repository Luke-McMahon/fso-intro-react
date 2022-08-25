import { useState, useEffect } from "react";

import phonebookService from "./services/phonebook";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Phonebook from "./components/Phonebook";
import Notification from "./components/Notification";

import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [showFilter, setShowFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(true);

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
          handlePersonUpdate(`Removed ${person.name}`, true);
        })
        .catch((e) => {
          handlePersonUpdate(
            `${person.name} already removed, cleaning up...`,
            false
          );
          setPersons(persons.filter((p) => p.id !== person.id));
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
          handlePersonUpdate(`Updated ${updated.name}`, true);
        })
        .catch((e) => {
          handlePersonUpdate(`${e.response.data.error}`, false);
        });
    }
  };

  const handlePersonUpdate = (message, success) => {
    setErrorMessage(`${message}`);
    setSuccess(success);
    setTimeout(() => {
      setErrorMessage(null);
      setSuccess(true);
    }, 3000);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} success={success} />
      <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        updatePerson={(p, c) => updateEntry(p, c)}
        onUpdate={(m, s) => handlePersonUpdate(m, s)}
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
