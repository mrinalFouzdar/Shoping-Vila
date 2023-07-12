import React from "react";
import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Priners",
    "Camera",
    "Books",
  ];

  const CardProduct = () => {
    return (
      <Container className="d-flex">
        <Row xs={1} md={3} className=" g-4 mt-5 justify-content-center">
          {categories &&
            categories.map((category , idx) => (
              <Col key={idx}>
                <CategoryCardComponent category={category} idx={idx}/>
              </Col>
            ))}
        </Row>
      </Container>
    );
  };



  return (
    <div>
      {/* // home page */}
      <ProductCarouselComponent />
      {CardProduct()}
    </div>
  );
};

export default HomePage;
