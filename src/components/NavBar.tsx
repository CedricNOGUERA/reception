import React from 'react'
import { Button, Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import "../assets/styles/NavBar.css";

const NavBar = () => {
   const loggedStr: any = sessionStorage.getItem('log')
    const logged = JSON.parse(loggedStr)

    const logout = () => {
       
        sessionStorage.removeItem('log')
        window.location.href = "/"
       
    }
   
  return (
    <Container fluid className="px-0">
        <Navbar bg="light">
          <Container fluid>
            <Navbar.Brand > <Link to="/">Reception app</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {logged && logged.connected == true && (
                  <>
                  <Link to={"/"}>
                  <Button onClick={logout} >déconnexion</Button>
                  </Link>{" "}
                  Signed in as: <a href="#">
                      {logged.nameuser}
                  </a>
                  </>
                )}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
  )
}

export default NavBar
