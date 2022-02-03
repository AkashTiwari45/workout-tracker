import React from 'react';
import './App.css';
import { Navbar, NavbarBrand, NavDropdown, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'

function Head_Navbar() {
    return (
        <>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">WorkoutTracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>

                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/trainer">Contact</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Head_Navbar
