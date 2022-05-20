import React from 'react'
import { Button, Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import "../assets/styles/NavBar.css";

const NavBar = (logg: any) => {
   const loggedStr: any = sessionStorage.getItem('log')
    const logged = JSON.parse(loggedStr)
    const loggUser = logg.logg
console.log(loggUser)
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
                {loggUser && loggUser.connected == true && (
                  <>
                  <Link to={"/"}>
                  <Button onClick={logout} >déconnexion</Button>
                  </Link>{" "}
                  Signed in as: <a href="#">
                      {loggUser.nameuser}
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
