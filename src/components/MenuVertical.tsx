import React from 'react'
import { Button, Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MenuVertical = (role: any) => {

console.log(role.role)



  return (
   
                <Col xs={5} md={4} lg={3} style={{ height: "100vh" }} className="bg-light">
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
                    {role.role === "chef_dep" || role.role === "admin" ? (

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
                      ):(null)}
                    <ListGroup.Item>
                    <img src="https://img.icons8.com/stickers/25/user.png" alt="icon" loading="lazy" />
                      {""}{" "}
                      <Link className="menu" to="/profile">
                        <b>User profile</b>
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
               
  )
}

export default MenuVertical
