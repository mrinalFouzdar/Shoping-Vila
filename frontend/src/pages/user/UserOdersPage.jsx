import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'

const UserOdersPage = () => {
  return (
    <Row className='m-5'>
      <Col md={12}>
        <h1>My Orders</h1>

        <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
      </Col>
    </Row>
  )
}

export default UserOdersPage
