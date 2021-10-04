import React from 'react'
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';


const LiveSearch = () => {

const [inputValue, setInputValue] = React.useState("");
const [isLoading, setIsLoading] = React.useState(false);
const [error, setError] = React.useState(false);
const [repos, setRepos] = React.useState([]);

useEffect(() => {
  if (!inputValue) {
    return;
  }

  setIsLoading(true);

  // make API calls
  fetch("https://api.github.com/search/repositories?q=" + inputValue)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      setIsLoading(false);
      setRepos(data.items);
    })
    .catch(err => {
      setIsLoading(false);
      setError(true);
      console.error(err);
    });
}, [inputValue]);

return (
  <div style={{width: '500px'}} className=" card bg-dark text-center text-white">
    <form
      onSubmit={evt => {
        evt.preventDefault();
        setInputValue(evt.target.elements.query.value);
      }}
    >
        <Form.Group className="mb-3 card-body" controlId="formBasicEmail">
    <Form.Label>Busque un Repositorio por nombre</Form.Label>
    <Form.Control type="text" name="query" placeholder="ingrese el nombre del repositorio "/>
    </Form.Group>
    </form>
    {isLoading && <div>Loading...</div>}
    {error && (
      <div>
        Unexpected Error Occurred fetching data. Please try again later!
      </div>
    )}
    <ul className="repo_list card-body">
      {repos.map(repo => {
        return (
          <li key={repo.id} className="repo_item">
            <a style={{color: 'white'}}href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  </div>
);
}

export default LiveSearch
