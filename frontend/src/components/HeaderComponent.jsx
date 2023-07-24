import React from "react";
import { Link } from "react-router-dom";

import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  // NavLink,
  Navbar,
} from "react-bootstrap";
const HeaderComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <Navbar.Brand as={Link} to='/'>SHOPING VILA</Navbar.Brand>
        {/* </Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* NAV LEFT SECTION */}
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Card</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in shoop ..." />
              <Button variant="warning">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Nav>

          {/* NAV RIGHT SECTION */}
          <Nav>
            <Link to="/admin/orders" style={{ textDecoration: "none" }}>
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border-light rounded-circle"></span>
              </Nav.Link>
            </Link>

            <NavDropdown title="Mrinal" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>

            {/* <Link to="/Login" style={{ textDecoration: "none" }}> */}
              <Nav.Link as={Link} to="/Login">Loing</Nav.Link>
            {/* </Link> */}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            </Link>
            {/* <Link to="/cart" style={{ textDecoration: "none" }}> */}
              <Nav.Link  as={Link} to='/cart'>
                <Badge pill bg="danger">
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">Cart</span>
              </Nav.Link>
            {/* </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
