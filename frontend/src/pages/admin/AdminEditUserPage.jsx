import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  firstName: "Mrinal",
  lastName: "Fouzdar",
  email: "test@gmail.com",
  isAdmin: true,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
});
const AdminEditUserPage = () => {
  const EditeUserForm = () => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value, { setSubmitting }) => {
          console.log(value);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue, values, errors, handleSubmit }) => (
          <Form className="form-container" onSubmit={handleSubmit}>
            <FormLabel>First Name</FormLabel>
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              as={FormControl}
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-denger"
            />
            <FormLabel>First Name</FormLabel>
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              as={FormControl}
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-denger"
            />
            <FormLabel>Email</FormLabel>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              as={FormControl}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-denger"
            />
            <Form.Check
              type="checkbox"
              name="isAdmin"
              label="Is Admin"
              // value={values.isAdmin}
              checked={values.isAdmin}
              onChange={(e) => setFieldValue("isAdmin", e.target.checked)}
            />

            <Button type="submit" disabled={isSubmitting} className="mt-3">
              Update
            </Button>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Button as={Link} to="/admin/user">
            Go Back
          </Button>
        </Col>
        <Col md={6}>
          <h1>Edite User</h1>
          <EditeUserForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUserPage;
