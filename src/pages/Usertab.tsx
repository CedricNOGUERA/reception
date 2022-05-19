import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Usertab = () => {
 
    const [userData, setUserData] = React.useState<any>([]);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
    const [id, setId] = useState(0);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [role, setRole] = useState("");
    const [pass, setPass] = useState("");
  
    //GET
  
    useEffect(() => {
    
  
      const fetchData = async () => {
        const result = await axios("https://6221521cafd560ea69ad5ed1.mockapi.io/users")
        var infoUser = sessionStorage.getItem("cle");
        if(infoUser == null){
          console.log("null")
          sessionStorage.setItem('cle', JSON.stringify(result.data))
          setUserData(result.data)
        } else {
          setUserData(result.data)
          sessionStorage.setItem('cle', JSON.stringify(result.data))
          console.log(result.data);
          console.log('no data');
  
        }
      };
      fetchData()
  
    }, []);
  
  
    //POST
  
    const addUser = (event: any) => {
      event.preventDefault();
      const userName = fName.toLowerCase() + "@" + lName.toLowerCase();
      // const result = {
      //   id: Math.random(),
      //   first_name: fName,
      //   last_name: lName,
      //   username: userName,
      //   role: role,
      //   pass: pass,
      // };
  
  
  
  
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
  
      axios.post('https://6221521cafd560ea69ad5ed1.mockapi.io/users', {
        id: Math.random(),
        first_name: fName,
        last_name: lName,
        username: userName,
        role: role,
        pass: pass,
      })
      .then(function (response) {
        console.log(response.data);
        setUserData([...userData, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  
  
  
      handleClose2();
      setFName("");
      setLName("");
      setRole("");
      setPass("");
    };
  
    //UPDATE
  
    const handleUpdateUser = (user: any) => {
      handleShow();
  
      setId(user.id);
      setFName(user.first_name);
      setLName(user.last_name);
      setRole(user.role);
      setPass(user.pass);
    };
    const updateUser = (event: any) => {
      event.preventDefault();
      const userName = fName.toLowerCase() + "@" + lName.toLowerCase();
      // const result = {
      //   id: id,
      //   first_name: fName,
      //   last_name: lName,
      //   username: userName,
      //   role: role,
      //   pass: pass,
      // };
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
  
      axios.put(`https://6221521cafd560ea69ad5ed1.mockapi.io/users/${id}`, {
        id: id,
        first_name: fName,
        last_name: lName,
        username: userName,
        role: role,
        pass: pass,
      })
      .then(function (response) {
        const index = userData.findIndex((user: any) => user.id === id);
        const newTab = [...userData];
        newTab[index] = response.data;
        // console.log(result)
        sessionStorage.setItem('cle', JSON.stringify(newTab))
        console.log(response)
  
    
        setUserData(newTab);
      })
      .catch(function (error) {
        console.log(error);
      });
  
  
      handleClose();
      setId(0);
      setFName("");
      setLName("");
      setRole("");
      setPass("");
    };
  
    //DELETE
  
    const deleteUser = (id: number) => {
      if (
        window.confirm("Voulez-vous définitivement suprimer cet utilisateur ?")
        ) {
  
          axios
          .delete(`https://6221521cafd560ea69ad5ed1.mockapi.io/users/${id}`)
          .then(function (response) {
            const userDel = userData.filter((user: any) => user.id !== id);
            console.log(userDel)
            console.log(response)
            setUserData(userDel);
          
          })
          .catch(function (error) {
            console.log(error)
          })
  
  
  
        // const userDel = userData.filter((user: any) => user.id !== id);
        // setUserData(userDel);
      }
    };
  
    return (
      <Container fluid className="App px-0 w-100">
        <Row>
          <Col>
            <Container fluid className="px-0" style={{ height: "15vh" }}>
              <Row>
                <Col xs={2} md={4} className="ms-3 p-3">
                  <Link to="/">
                    <img
                      alt="Gauche icon"
                      src="https://img.icons8.com/stickers/32/left.png"
                    />
                  </Link>
                </Col>
                <Col className="ms-3 p-3">
                  <h2>USERS BOARD</h2>
                </Col>
              </Row>
            </Container>
            <Container>
              <Button
                onClick={handleShow2}
                className="bg-light border-light m-2"
              >
                <img
                  src="https://img.icons8.com/stickers/25/plus-math.png"
                  alt="add user"
                ></img>
              </Button>
              Add user
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Rôle</th>
                    <th>Pass</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user: any, indx: any) => (
                    <>
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                        <td>{user.pass}</td>
                        <td>
                          <Button
                            className="bg-light border-light"
                            onClick={(e) => handleUpdateUser(user)}
                          >
                            <img
                              src="https://img.icons8.com/stickers/25/pencil.png"
                              alt="update"
                            />
                          </Button>
                        </td>
                        <td>
                          <Button
                            className="bg-light border-light"
                            onClick={(e) => deleteUser(user.id)}
                          >
                            <img
                              src="https://img.icons8.com/stickers/25/delete-sign.png"
                              alt="delete"
                            />
                          </Button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </Table>
            </Container>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <img
                    src="https://img.icons8.com/stickers/25/pencil.png"
                    alt="update"
                  />{" "}
                  Update user
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={updateUser}>
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter first name"
                        value={fName}
                        onChange={(e) => setFName(e.currentTarget.value)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter last name"
                        value={lName}
                        onChange={(e) => setLName(e.currentTarget.value)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                      <Form.Control.Feedback type="invalid">
                        Please provide your Last name.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Select
                      required
                      aria-label="Default select example"
                      value={role}
                      onChange={(e) => setRole(e.currentTarget.value)}
                    >
                      <option value="">Sélection un status</option>
                      <option value="admin">Admin</option>
                      <option value="chef_dep">Chef de dep</option>
                      <option value="manager">Manager</option>
                      <option value="first_els">Emloyé principal</option>
                      <option value="els">E.L.S</option>
                    </Form.Select>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setPass(e.currentTarget.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Button type="submit">Submit</Button>
                </Form>
              </Modal.Body>
              {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Submit
              </Button>
            </Modal.Footer> */}
            </Modal>
            <Modal
              show={show2}
              onHide={handleClose2}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <img
                    src="https://img.icons8.com/stickers/25/plus-math.png"
                    alt="add user"
                  />{" "}
                  New user
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={addUser}>
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter first name"
                        onChange={(e) => setFName(e.currentTarget.value)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter last name"
                        onChange={(e) => setLName(e.currentTarget.value)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                      <Form.Control.Feedback type="invalid">
                        Please provide your Last name.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Select
                      required
                      aria-label="Default select example"
                      onChange={(e) => setRole(e.currentTarget.value)}
                    >
                      <option value="">Sélection un status</option>
                      <option value="admin">Admin</option>
                      <option value="chef_dep">Chef de dep</option>
                      <option value="manager">Manager</option>
                      <option value="first_els">Emloyé principal</option>
                      <option value="els">E.L.S</option>
                    </Form.Select>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPass(e.currentTarget.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Button type="submit">Submit</Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
}

export default Usertab
