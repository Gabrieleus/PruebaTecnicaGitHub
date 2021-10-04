import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';
import Results from './Results'
const Search = () => { 

   const [searchInput, setSearchInput] = useState('');
   const [repos, setRepos ] =useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleClick = async () => {
        console.log(searchInput)

        try {
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`)

            setRepos(result);

        }catch(err){
            console.log(err)
        }

    
    }
    return (
        <div className="card bg-dark text-white text-center">
          <div className="card-body">
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Usuario Github</Form.Label>
    <Form.Control type="text" placeholder=" usuario " onChange={handleChange}/>
    <Form.Text className="text-muted">
Ingrese el nombre claro del usuario  </Form.Text>
  </Form.Group>
              <Button onClick={handleClick} variant="success">Buscar</Button>
            </div>
            <Results repos={repos} />
        </div>
    )
}

export default Search