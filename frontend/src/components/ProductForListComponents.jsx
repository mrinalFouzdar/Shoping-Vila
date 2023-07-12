import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const ProductForListComponents = () => {
  return (
    <Card style={{ marginTop: "30", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img
            variant="top"
            className="object-fit-cover"
            width="180px"
            height="180px"
            src="/images/nothing phone.webp"
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>category</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5}/> (1)
            </Card.Text>
            <Card.Text className="h4">
              $124
            <Link to="/product-details">
              <Button variant="danger">View Product</Button>
            </Link>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponents;
