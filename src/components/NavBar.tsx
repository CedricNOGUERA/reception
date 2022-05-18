import React from 'react'
import { Button, Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../assets/styles/NavBar.css";

const NavBar = () => {
  return (
    <Container fluid className="px-0">
        <Navbar bg="light">
          <Container fluid>
            <Navbar.Brand > <Link to="/">Reception app</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {/* {nomRecolt && (
                  <>
                  <Link to={"/"}>
                  <Button onClick={delSession}>déconnexion</Button>
                  </Link>{" "}
                  Signed in as: <a href="#login">{nomRecolt.uname}</a>
                  </>
                )} */}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
  )
}

export default NavBar
