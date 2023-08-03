import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinkscomponent from "../../components/admin/AdminLinkscomponent";

const AdminUserPage = () => {

  const deleteHandler =()=>{
    if(window.confirm('Are you sure?')) alert('Product deleted!')

  }
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkscomponent />
      </Col>
      <Col md={10}>
        <h1>User List</h1>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>Mrianl</td>
                  <td>Fouzdar</td>
                  <td>test@gamil.com</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>


                    <Button className="btn-sm" as={Link} to={`/admin/edit-user`}>
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  {" / "}
                  <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                    <i className="bi bi-x-circle"></i>
                  </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminUserPage;



