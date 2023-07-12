import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer >
      <Container fluid className="mt-5">
        <Row >
          <Col className="bg-dark text-white text-center py-3 ">
            Copyright &copy; Best Onlie Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
