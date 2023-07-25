import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const AdminLinkscomponent = () => {
  const location = useLocation();

  const isActiveLink = (to) => {
    return location.pathname === to;
  };

  const activeLinkStyle = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <Nav.Link
          as={Link}
          to="/admin/orders"
          style={isActiveLink("/admin/orders") ? activeLinkStyle : {}}
        >
          Orders
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/admin/products"
          style={isActiveLink("/admin/products") ? activeLinkStyle : {}}
        >
          Products
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/admin/user"
          style={isActiveLink("/admin/user") ? activeLinkStyle : {}}
        >
          Users
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/admin/chats"
          style={isActiveLink("/admin/chats") ? activeLinkStyle : {}}
        >
          Chats
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/admin/analytics"
          style={isActiveLink("/admin/analytics") ? activeLinkStyle : {}}
        >
          Analytics
        </Nav.Link>
        <Nav.Link>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminLinkscomponent;
