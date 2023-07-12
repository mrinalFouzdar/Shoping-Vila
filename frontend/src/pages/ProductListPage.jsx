import React from "react";
import { Button,  Col, Container, ListGroup, Row } from "react-bootstrap";
import SortOptionsComponent from "../components/SortOptionsComponent";
import PriceFilterComponent from "../components/filterQueryREsultOptioons/PriceFilterComponent";
import RatingFilterComponent from "../components/filterQueryREsultOptioons/RatingFilterComponent";
import CategoryFilterComponent from "../components/filterQueryREsultOptioons/CategoryFilterComponent";
import AttributesFilterComponent from "../components/filterQueryREsultOptioons/AttributesFilterComponent";
import ProductForListComponents from "../components/ProductForListComponents";
import PaginationComponent from "../components/PaginationComponent";

const ProductListPage = () => {
  return (
    <Container fluid>
      <Row className="mt-2">
        <Col md={3} sm={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent/>
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilterComponent/>
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent/>
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent/>
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent/>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary" className="">
                Filter
              </Button>
              <Button variant="danger">
                Reset filters
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9} sm={9}>
          {Array.from({length:5}).map((_,idx)=>(
            <ProductForListComponents
            key={idx}
            idx={idx}
            />

          ))}
          <PaginationComponent/>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
