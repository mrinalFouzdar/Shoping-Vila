import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinkscomponent from "../../components/admin/AdminLinkscomponent";

const AdminProductsPage = () => {
  // const location = useLocation();
  // const {productId} = useParams()
  // console.log(location)
  // console.log(productId)
  const deleteHandler =()=>{
    if(window.confirm('Are you sure?')) alert('Product deleted!')
  }
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkscomponent />
      </Col>
      <Col md={10}>
        <h1>
          Product{" "}
          <Button
            as={Link}
            to="/admin/create-new-product"
            variant="primary"
            size="lg"
          >
            Create new
          </Button>
        </h1>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Panasonic", price: "$250", category: "TV" },
              { name: "Lenovo", price: "$1000", category: "Laptops" },
              { name: "GTA 10", price: "$345", category: "Games" },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>{item?.category}</td>
                <td>
                  <Button className="btn-sm" as={Link} to={`/admin/edit-product/${idx}`}>
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  {" / "}
                  <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                    <i className="bi bi-x-circle"></i>
                  </Button>

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminProductsPage;
