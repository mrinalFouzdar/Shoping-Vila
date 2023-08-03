import React from "react";
import AdminChatRoomCompnent from "../../components/admin/AdminChatRoomCompnent";
import { Col, Row } from "react-bootstrap";
import AdminLinkscomponent from "../../components/admin/AdminLinkscomponent";
const AdminChatsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkscomponent />
      </Col>
      <Col md={10}>
        <Row className="mt-3">
          <AdminChatRoomCompnent />
        </Row>
      </Col>
    </Row>
  );
};

export default AdminChatsPage;
