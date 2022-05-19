import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/Homepage.css";
import AuthForm from "../components/AuthForm";
import MenuVertical from "../components/MenuVertical";
import NavBar from "../components/NavBar";

function Homepage() {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  const [userName, setUserName] = React.useState<string>("");
  const [userPass, setUserPass] = React.useState<string>("");


// put the data in session variable
  const baseNoParse: any = sessionStorage.getItem("base")
  const base: any = JSON.parse(baseNoParse)

  const loggedStr: any = sessionStorage.getItem('log')
  const logged = JSON.parse(loggedStr)

  // Get : use axios to get data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://6221521cafd560ea69ad5ed1.mockapi.io/users")
base && (

  sessionStorage.setItem("base", JSON.stringify(result.data))
  )
    }
    fetchData()
  }, [])
  
  useEffect(() => {
    
  }, [NavBar])



  return (
    <Container fluid className=" px-0 justify">
      {/* <NavBar /> */}
    {logged !== null && logged.connected == true ? (

      <Container fluid className=" px-0 justify">
        <Row className="menu">
          <MenuVertical role={logged.role} />

          <Col className="content">

          </Col>
        </Row>
      </Container>
        ) : (

          <AuthForm userName={userName} setUserName={setUserName} userPass={userPass} setUserPass={setUserPass} dataBase={base} isAuth={isAuth} setIsAuth={setIsAuth}/>
        )} 
    </Container>
  );
}

export default Homepage;
