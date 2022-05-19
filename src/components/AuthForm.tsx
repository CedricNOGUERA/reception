import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthForm = (userName: any) => {
  const [isError, setIsError] = React.useState<boolean>(false);

  const dataBase = userName.dataBase;
  const userN = userName.userName;
  const userPass = userName.userPass;
  const setIsAuth = userName.setIsAuth;
  const setUserName = userName.setUserName;
  const setUserPass = userName.setUserPass;

  const [formName, setformName] = React.useState<string>("");
  const [formPass, setformPass] = React.useState<string>("");

  const logUser: any = sessionStorage.getItem("log");
  const log: any = JSON.parse(logUser);


  const authentification = (e: any) => {
    e.preventDefault();
    const userAuth = dataBase.filter(
      (filt: any) => filt.username == formName && filt.pass == formPass
    );

    userAuth[0] &&
    userAuth[0].username === formName &&
    userAuth[0].pass === formPass
      ? (setformName(""),
        setformPass(""),
        setIsAuth(true),
        setIsError(false),
        console.log(userAuth),
        sessionStorage.setItem('log', JSON.stringify({'nameuser': formName,'role': userAuth[0].role, 'connected': true}))
      ) : (setIsError(true), setIsAuth(false));
  };

  return (
    <Container className="w-100 mt-5" style={{ background: "none" }}>
      <Row justify="space-around" align="middle">
        <Col xs={12}>
          <Card className="p-5">
            <Card.Text>
          <img src="https://img.icons8.com/stickers/144/user.png" alt="icon" loading="lazy" />
             <p> <b>Log in</b></p>
            </Card.Text>
            <Form id="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={formName}
                    onChange={(e) => {
                      setformName(e.currentTarget.value);
                    }}
                  />
                </FloatingLabel>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formPass}
                    onChange={(e) => {
                      setformPass(e.currentTarget.value);
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
              {isError && (
                <p style={{ color: "red" }}>
                  <img
                    src="https://img.icons8.com/stickers/25/delete-shield.png"
                    alt="icon"
                    loading="lazy"
                  />{" "}
                  <b>Erreur sur vos informations</b>
                </p>
              )}

              <Button variant="primary" 
              onClick={authentification}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthForm;
