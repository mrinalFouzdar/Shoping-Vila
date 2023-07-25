import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";

const UserOrderDetailsPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h2 style={{ textAlign: "center" }}>Order Details</h2>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6} sm={6}>
              <h3>Shipping</h3>
              <b>Name</b>: John Doe <br />
              <b>Address</b>: 700097 Salt lake , Kolkata <br />
              <b></b>
            </Col>
            <Col md={6} sm={6}>
              <h3>Payment method</h3>
              <Form.Select disabled={false}>
                <option value="pp">PayPal</option>
                <option value="cod">Cash On Delivery</option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered. In order to make order, fill out your profile
                  with correct address, city etc.
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Not paid yet
                </Alert>
              </Col>
            </Row>
          </Row>

          <br />
          <h3>Order items</h3>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-denger">
              Total price: <span className="fw-bold">$904</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" variant="danger" type="button">
                  Pay for the order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPage;
