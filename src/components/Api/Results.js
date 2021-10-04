import React from 'react'
import { Dropdown, Table } from 'react-bootstrap';
const Results = (props) => {
    const { repos } = props;
    console.log('Repo is: ', repos.data);

    const listRepos = 
    repos.length !== 0  ? (
        repos.data.slice(0, 5).map((item) => 
        <Dropdown className="text-center" >
        <Dropdown.Toggle variant="success" id="dropdown-basic" key={item.id}>
         {item.name}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark" className="bg-dark">
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Lenguaje</th>
                <th>URL</th>
                <th>Branch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{item.name}</td>
                <td>{item.language}</td>
                <td herf={item.url}>{item.url}</td>
                <td>{item.default_branch}</td>
                </tr>
            </tbody>
            </Table>
        </Dropdown.Menu>
        </Dropdown>

        )
        ) : (<li>Ningun Repositorio Ha Sido Encontrado</li>
            );
    return (
        <div ClassName="container">
            <h6>Repositorios del usuario consultado:</h6>
            {listRepos}
        </div>
    )
}

export default Results
