import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  ListGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/Homepage.css";
import AuthForm from "../components/AuthForm";
import MenuVertical from "../components/MenuVertical";
import NavBar from "../components/NavBar";

function App() {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);




  // Get : use axios to get data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://6221521cafd560ea69ad5ed1.mockapi.io/users")

      console.log(result.data)
    }
    fetchData()
  }, [])




  return (
    <Container fluid className=" px-0 justify">
      <NavBar />
    {isAuth ? (

      <Container fluid className=" px-0 justify">
        <Row className="menu">
          <MenuVertical />

          <Col className="content"></Col>
        </Row>
      </Container>
        ) : (

          <AuthForm />
        )} 
    </Container>
  );
}

export default App;
