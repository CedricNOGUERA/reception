import React from 'react'
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
const AuthForm = () => {
  return (
    <Container className="w-50 mt-5" style={{ background: "none" }}>
    <Row justify="space-around" align="middle">
      <Col xs={12}>
        <Card className="p-5">
          <Card.Text>
            <b>Log in</b>
          </Card.Text>
          <Form id="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  // value={userN}
                  // onChange={(e) => {
                  //   setUserN(e.currentTarget.value);
                  // }}
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
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={userPass}
                  // onChange={(e) => {
                    // setUserPass(e.currentTarget.value);
                  // }}
                />
              </FloatingLabel>
            </Form.Group>

            {/* <Button variant="primary" onClick={authentification}> */}
              Submit
            {/* </Button> */}
          </Form>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default AuthForm
