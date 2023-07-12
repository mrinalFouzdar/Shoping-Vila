import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCardComponent = ({ category, idx }) => {
  return (
    <Card style={{  }}>
      <Card.Img variant="top" src="/images/nothing phone.webp" />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to='/product-list'>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
