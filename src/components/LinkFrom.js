import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const LinkFrom = (props) => {

    const initialStateValues = {
        nombre: '',
        cedula: '',
        fechadenacimiento: '',
        correoelectronico: '',
        usuariodegithub: ''
    }

    const [values, setValues ] = useState(initialStateValues);


    const handleSubmit = e => {
        e.preventDefault();
          console.log(values)  
          props.addOrEditInfo(values);
          setValues({...initialStateValues})
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <div className="card bg-dark text-white ">
            <div className="card-body">
            <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Nombre Completo" onChange={handleInputChange} name="nombre" value={values.nombre}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Cédula</Form.Label>
        <Form.Control type="text" placeholder="Ingrese aqui su numero de documento" onChange={handleInputChange} name="cedula" value={values.cedula}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="text" placeholder="Ingrese en formato DD/MM/YYYY" onChange={handleInputChange} name="fechadenacimiento" values={values.fechadenacimiento} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Correo Electrónico" onChange={handleInputChange} name="correoelectronico" value={values.correoelectronico}/>
    </Form.Group>
    <Form.Group>
    <Form.Label>Usuario de Github</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Usuario de GitHub" onChange={handleInputChange} name="usuariodegithub" value={values.usuariodegithub}/>
    </Form.Group>
    <br></br>
    <Button variant="success" type="submit">
        Submit
    </Button>
    </Form>
    </div>
    </div>
    )
}

export default LinkFrom
