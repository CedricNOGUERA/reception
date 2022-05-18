import { useState } from 'react'
import { Button, Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/styles/Homepage.css'


function App() {

  return (
    <Container fluid className=" px-0 justify">
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
<Container fluid className=" px-0 justify">
<Row className="menu">
            <Col xs={5} md={4} lg={3} style={{ height: "100vh" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {" "}
                  <img
                    src="https://img.icons8.com/stickers/25/edit-file.png"
                    alt="icon"
                    loading="lazy"
                  />
                  {""}
                  <Link className="menu" to="/user_board">
                    <b>Pointage de marchandise</b>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <img
                    src="https://img.icons8.com/stickers/25/conference-call.png"
                    alt="icon"
                  />
                  {""}{" "}
                  <Link className="menu" to="/user_board">
                    <b>Users board</b>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className="content"></Col>
          </Row>    
    </Container>
    </Container>
  )
}

export default App
