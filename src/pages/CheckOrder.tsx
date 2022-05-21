import React, {useState} from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const CheckOrder = () => {
  const [numOrder, setNumOrder] = React.useState("");
  const [isChoise, setIsChoise] = React.useState(false);
  const [dataFilt, setDataFilt] = React.useState<any>([]);
  const dataOrder: any = [
    {
      id: 2,
      cnuf: 1915,
      orderNum: 463673,
      client: "Easy Market Faa'a",
      numClient: 7,
      rayon: 66,
      orderTime: "30/09/22",
      status: "en attente",
      orderDetail: [
        {
          productNum: 660107,
          designation: "12 COLLIERS COQUILLAGES",
          qty_cde: 12,
          qty_fact: 10,
          pcb: 1,
          pa: 106,
          tva: 13,
        },
        {
          productNum: 662525,
          designation: "PINCES A LINGE",
          qty_cde: 1,
          qty_fact: 1,
          pcb: 12,
          pa: 255,
          tva: 13,
        },
      ],
    },
    {
      id: 1,
      cnuf: 95450,
      orderNum: 463672,
      client: "Easy Market Prince Hinoi",
      numClient: 9,
      rayon: 50,
      orderTime: "26/08/22",
      status: "en attente",
      orderDetail: [
        {
          productNum: 75001268,
          designation: "250G EMMENTAL CRF",
          qty_cde: 2,
          qty_fact: 1,
          pcb: 12,
          pa: 270,
          tva: 5,
        },
        {
          productNum: 75001363,
          designation: "1KG EMMENTAL RAPE CRF",
          qty_cde: 3,
          qty_fact: 3,
          pcb: 10,
          pa: 850,
          tva: 5,
        },
        {
          productNum: 75001447,
          designation: "220G EMMENTAL PP BLANC  ",
          qty_cde: 3,
          qty_fact: 2,
          pcb: 50,
          pa: 230,
          tva: 5,
        },
      ],
    },
  ];
  const data: any = dataOrder;
  let dataOrd = dataOrder.filter((data: any) => data.orderNum == numOrder);
  if (dataOrd.length == 0) {
    dataOrd = dataOrder;
  }
  console.log(dataOrd);

  const choose = (e: any) => {
    e.preventDefault();
    // const dataOrd = dataOrder.filter((data: any) => (data.orderNum == numOrder))
    // console.log(dataOrd)
  };

  const scoreOrder = (num: any) => {
    const selectedOrder = dataOrder.filter((data: any) => data.orderNum == num)
    setDataFilt(selectedOrder)
    setIsChoise(true);
  };
  console.log(dataFilt);
  let sun: any
  const reducer = (accumulator, curr) => accumulator + curr
 

  return (
    <Container fluid className=" px-0 justify">
      <NavBar />
      {isChoise == false ? (
        <>
          <Container fluid>
            <Container className="col-12 col-md-6">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>Order number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter the order number"
                    value={numOrder}
                    onChange={(e) => setNumOrder(e.currentTarget.value)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
                {/* <Button onClick={choose}>clik</Button> */}
              </Form>
            </Container>
          </Container>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Numéro de facture</th>
                  <th>Fournisseur</th>
                  <th>Client</th>
                  <th>Rayon</th>
                  <th>Date de commande</th>
                  <th>Status de commande</th>
                </tr>
              </thead>
              <tbody>
                {dataOrd.map((order: any) => (
                  <>
                    <tr
                      key={order.id}
                      onClick={() => scoreOrder(order.orderNum)}
                    >
                      <td>{order.orderNum}</td>
                      <td>{order.cnuf}</td>
                      <td>{order.numClient}</td>
                      <td>{order.rayon}</td>
                      <td>{order.orderTime}</td>
                      <td>{order.status}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <>
          <Container fluid>
            {" "}
            <Col
              xs={2}
              md={4}
              className="ms-3 p-3"
              onClick={() => setIsChoise(false)}
            >
              <img
                alt="Gauche icon"
                src="https://img.icons8.com/stickers/32/left.png"
              />
            </Col>
          </Container>
          <Container>
            <Container>
              <Row>
                <Col xs={6}>
                  <div>
                    <b>CEDIS</b>
                  </div>
                  <br />
                  <div>Rayon : {dataFilt[0].rayon}</div>
                </Col>
                <Col>
                  <div className="d-flex justify-content-start">
                    <b>Facture {dataFilt[0].orderNum}</b>
                  </div>
                  <br />
                  <div className="d-flex justify-content-end">
                    Client : <b> {dataFilt[0].client}</b>
                  </div>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Code produit</th>
                        <th>Désignation</th>
                        <th>qté commandée</th>
                        <th>qté facturée</th>
                        <th>PCB</th>
                        <th>Prix unitaire</th>
                        <th>TVA</th>
                        <th>Montant HT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataFilt[0].orderDetail.map((data: any) => (
                        <>
                          <tr key={data.productNum}>
                            <td>{data.productNum}</td>
                            <td>{data.designation}</td>
                            <td>{data.qty_cde}</td>
                            <td>{data.qty_fact}</td>
                            <td>{data.pcb}</td>
                            <td>{data.pa}</td>
                            <td>{data.tva}</td>
                            <td>
                              {Math.round(
                                data.qty_fact *
                                  data.pcb *
                                  data.pa *
                                  (1 + data.tva / 100)
                              )}
                            </td>
                          </tr>
                        </>
                      ))}
                      <tr>
                        <td colSpan={6}></td>

                        <td> Net à payer </td>
                        <td>
                          {Math.round(
                            dataFilt[0].orderDetail[0].pa *
                              (1 + dataFilt[0].orderDetail[0].tva / 100) *
                              dataFilt[0].orderDetail[0].qty_fact *
                              dataFilt[0].orderDetail[0].pcb
                          ) +
                            Math.round(
                              dataFilt[0].orderDetail[1].pa *
                                (1 + dataFilt[0].orderDetail[1].tva / 100) *
                                dataFilt[0].orderDetail[1].qty_fact *
                                dataFilt[0].orderDetail[1].pcb
                            ) 
                            }
                        </td>
                      </tr>
                    </tbody>
                         
                  </Table>
                </Col>
              </Row>
            </Container>
          </Container>
        </>
      )}
    </Container>
  );
};

export default CheckOrder;