import axios from "axios";

const baseUrl = `/api/persons`;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(`${baseUrl}`, newPerson);
  return request.then((response) => response.data);
};

const deletePerson = (person) => {
  const { id } = person;
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    console.log("delete response", response);
    return response.data;
  });
};

const update = (id, newData) => {
  const request = axios.put(`${baseUrl}/${id}`, newData);

  return request.then((response) => {
    return response.data;
  });
};

export default { getAll, create, deletePerson, update };
