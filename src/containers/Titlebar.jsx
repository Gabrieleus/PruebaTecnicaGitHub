import React from 'react'
import {Navbar, Container} from 'react-bootstrap'


const Titlebar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>The Github Experience</Navbar.Brand>
        </Container>
        </Navbar>
    )
}

export default Titlebar
