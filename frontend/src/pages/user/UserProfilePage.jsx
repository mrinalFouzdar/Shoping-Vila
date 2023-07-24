import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
  Alert,
} from "react-bootstrap";

const UserProfilePage = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const initialValues = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phoneNumber: "8116019876",
    country: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mt-5 ">
          <Row className="text-center">
            <h1>User Profile</h1>
          </Row>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>First Name</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Phone Number</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Address</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                    placeholder="Enter your street name and house number"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Country</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="country"
                    id="country"
                    className="form-control"
                    placeholder="Enter your country"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Zip Code</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="zip"
                    id="zip"
                    className="form-control"
                    placeholder="Enter your Zip Code"
                  />
                  <ErrorMessage
                    name="zip"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>City</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    className="form-control"
                    placeholder="City"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>State</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="state"
                    id="state"
                    className="form-control"
                    placeholder="Enter your state"
                  />

                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Password</BootstrapForm.Label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <div className="text-center">
                  <Button type="submit" disabled={isSubmitting}>
                    Update
                  </Button>
                </div>
                <Alert show={true} variant="danger">
                  User with that email alreay exists!
                </Alert>
                <Alert show={true} variant="info">
                  User Updated
                </Alert>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
