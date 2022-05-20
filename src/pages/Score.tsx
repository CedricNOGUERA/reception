import React from 'react'
import { Container, Form } from 'react-bootstrap'
import NavBar from '../components/NavBar'

const Score = () => {

const dataScore: any = [
    {
        id: 1,
        cnuf: 1915,
        orderNum: 463673,
        rayon: 66,
        orderTime: "30/09/22",
        orderDetail: [
            {
                productNum: 660107,
                designation: "12 COLLIERS COQUILLAGES",
                qty: 1,
                pcb: 1,
                pa: 106,

            },
            {
                productNum: 660107,
                designation: "12 COLLIERS COQUILLAGES",
                qty: 1,
                pcb: 1,
                pa: 106,

            }
        ]

    }
]


  return (
    <Container fluid className=" px-0 justify">
      <NavBar />
      <Container fluid>
      <Form>
                
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>Order number</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter the order number"
                        // value={NumFact}
                        // onChange={(e) => setFName(e.currentTarget.value)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
        </Form>
      </Container>
      
    </Container>
  )
}

export default Score
