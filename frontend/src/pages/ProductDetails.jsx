import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import { Rating } from "react-simple-star-rating";
import ImageZoom from 'js-image-zoom'
const ProductDetails = () => {
  var options = {
    scale:2,
    offset: {vertical: 0, horizontal: 0}
};
  useEffect(()=>{
    new ImageZoom(document.getElementById('first'),options)
    new ImageZoom(document.getElementById('second'),options)
    new ImageZoom(document.getElementById('third'),options)
    new ImageZoom(document.getElementById('four'),options)
  })


  const ProductImageComponent = () => {
    return (
      <Col className="image-container">
        <div id="first" >
          <Image
            src="/images/games-gadget.jpeg"
            fluid
            className="grid-image"
          />
        </div>
        <br />
        <div id="second" >
          <Image
            src="/images/monitor.avif"
            fluid
            className="grid-image"
          />
        </div>
        <br />
        <div id="third">
          <Image
            src="/images/tablet.jpg"
            fluid
            className="grid-image"
          />
        </div>
        <br />
        <div id="four">
          <Image
            src="/images/nothing phone.webp"
            fluid
            className="grid-image"
          />
        </div>
        <br />
      </Col>
    );
  };

  const ProductAllDetilas = () => {
    return (
      <Col md={8}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h1>Product name</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating readonly size={20} initialValue={4} /> (1)
          </ListGroup.Item>
          <ListGroup.Item>
            Price <span className="fw-bold"> $345</span>
          </ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Col>
    );
  };

  const ProductStatusAndQuantity = () => {
    return (
      <Col md={4}>
        {/* product status, quantity */}
        <ListGroup>
          <ListGroup.Item> Status: in stock</ListGroup.Item>
          <ListGroup.Item>
            {" "}
            Price <span className="fw-bold"> $345</span>
          </ListGroup.Item>
          <ListGroup.Item>
            Quantity:
            <Form.Select id="formsecta">
              <option>1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
            </Form.Select>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="danger">Add to cart</Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    );
  };

  const ProductReviewList = () => {
    return (
      <Row>
        <Col className="mt-5">
          <h5>REVIEWS</h5>
          <ListGroup variant="flush">
            {Array.from({ length: 10 }).map((item, idx) => (
              <ListGroup.Item key={idx}>
                John Doe <br />
                <Rating readonly size={20} initialValue={4} />
                <br />
                20-09-2021 <br />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    );
  };

  const ProductReviewForm = () => {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Write a review</Form.Label>
          <Form.Control
            id="disabledTextInput"
            as="textarea"
            rows={3}
            placeholder="Disabled input"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Your rating</option>
            <option value="5">5 (very good)</option>
            <option value="4">4 (good)</option>
            <option value="3">3 (average)</option>
            <option value="2">2 (bad)</option>
            <option value="1">1 (awful)</option>
            <option value=""></option>
          </Form.Select>
        </Form.Group>
        <Button className="mb-3 mt-3" type="submit">
          Submit
        </Button>
      </Form>
    );
  };

  return (
    // <div  style={{overflowX:'hidden'}}>
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5 mb-3">
        {ProductImageComponent()}

        <Col md={8}>
          <Row>
            {ProductAllDetilas()}

            {ProductStatusAndQuantity()}
          </Row>
          {ProductReviewList()}
          <hr />
          send review form
          <Alert variant="danger">Lgin firs to write a review</Alert>
          {ProductReviewForm()}
        </Col>
      </Row>
    </Container>
    // </div>
    // null
  );
};

export default ProductDetails;
