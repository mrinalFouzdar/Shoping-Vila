import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItemComponent from "../components/CartItemComponent";

const CartPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8} sm={8}>
          <h1>Shopping Cart</h1>
          <ListGroup>
            {Array.from({ length: 3 }).map((item, idx) => (
            
                <CartItemComponent key={idx} />
              
            ))} 
          </ListGroup>

          <Alert variant="info">Your cart is empty</Alert>
        </Col>
        <Col md={4} sm={4}>
          <ListGroup>
            <ListGroupItem>
              <h3>Subtotal (2 Items)</h3>
            </ListGroupItem>
            <ListGroupItem>
              Price: <span className="fw-bold">$300</span>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/user/cart-details">
                <Button variant="primary">Proced To Checkout</Button>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
