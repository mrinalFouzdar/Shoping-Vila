import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormLabel,
  Row,
  Form,
  FormGroup,
  Table,
  CloseButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import Select from "react-select";
import * as Yup from "yup";
// import './AdminCreateProductPage.css'; // Import the CSS file
import "./addminCreateProductPage.css";
import ImageUpload from "../../components/Ui Components/ImageUploadComponents/ImageUpload";

const initialValues = {
  name: "",
  description: "",
  countInStock: "",
  price: "",
  category: null,
  newCategorie: "",
  atrribute: "",
  atrributeValue: "",
  newAttr: "",
  newAttrValue: "",
  image: [],
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  countInStock: Yup.number()
    .required("Required")
    .min(0, "Count in Stock cannot be negative")
    .integer("Count in Stock must be an integer"),
  price: Yup.number().required("Required"),
  category: Yup.array()
    .min(1, "Select at least one category")
    .required("Required"),
  image: Yup.array()
    .of(
      Yup.mixed().test("fileType", "Unsupported File Format", (value) => {
        if (value) {
          return ["image/jpeg", "image/png", "image/gif"].includes(value.type);
        }
        return true; // Allow empty array (no images) to pass validation
      })
    )
    .min(1, "Please select at least one image")
    .required("Please select an image"),
});

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  // Add more options as needed
];

const AdminCreateProductPage = () => {
  // Prodcut adding form
  const ProductCreateForm = () => {
    const [newCategorie, setNewCategorie] = useState("");

    const [categories, setCategories] = useState([
      { value: "electronics", label: "Electronics" },
      { value: "clothing", label: "Clothing" },
      { value: "books", label: "Books" },
    ]);

    const handleAddCategory = () => {
      if (newCategorie.trim() !== "") {
        const newCategoryOption = {
          value: newCategorie.toLowerCase(),
          label:
            newCategorie[0].toUpperCase() +
            newCategorie.slice(1, newCategorie.length).toLowerCase(),
        };
        console.log(newCategoryOption);
        setCategories((prevCategories) => [
          ...prevCategories,
          newCategoryOption,
        ]);
        setNewCategorie("");
      }
    };

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={
          (values, { setSubmitting }) => {
            // Handle form submission logic here
            console.log("object");
            console.log({ values });
            setSubmitting(false);
          }
          // handleSubmit
        }
      >
        {({ isSubmitting, setFieldValue, values, errors, handleSubmit }) => (
          <Form className="form-container" onSubmit={handleSubmit}>
            {console.log(errors)}
            {console.log(values)}
            <FormLabel>Name</FormLabel>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              as={FormControl}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />

            <FormLabel>Description</FormLabel>
            <Field
              type="textarea"
              name="description"
              placeholder="Description"
              rows={4}
              as={FormControl}
            />
            <ErrorMessage
              name="description"
              component="div"
              className="error-message"
            />

            <FormLabel>Count in Stock</FormLabel>
            <Field
              type="number"
              name="countInStock"
              placeholder="Count in Stock"
              aria-live="polite"
              as={FormControl}
            />
            <ErrorMessage
              name="countInStock"
              component="div"
              className="error-message"
            />

            <FormLabel>Price</FormLabel>
            <Field
              type="number"
              name="price"
              placeholder="Price"
              aria-live="polite"
              as={FormControl}
            />
            <ErrorMessage
              name="price"
              component="div"
              className="error-message"
            />

            <FormLabel>Category</FormLabel>
            <Select
              options={categories}
              name="category"
              value={categories.filter(
                (option) =>
                  values.category && values.category.includes(option.value)
              )}
              onChange={(options) =>
                setFieldValue(
                  "category",
                  options ? options.map((option) => option.value) : null
                )
              }
              isMulti
              placeholder="Select category"
              aria-live="polite"
            />
            <ErrorMessage
              name="category"
              component="div"
              className="error-message"
            />
            <FormGroup className="mt-3">
              <FormLabel>
                Or create a new category(e.g. Computer/Laptops/intel)
              </FormLabel>
              <Form.Control
                type="text"
                name="newCategory"
                value={newCategorie}
                onChange={(e) => setNewCategorie(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); //Prevent form submission
                    handleAddCategory();
                  }
                }}
                placeholder="add category"
              />
            </FormGroup>
            <Row className="mt-5">
              <Col md={6} sm={6}>
                <Form.Group className="mb-3">
                  <FormLabel>Choose atrribute and set value</FormLabel>
                  <Select
                    options={options}
                    name="atrribute"
                    value={options.find(
                      (options) => options.value === values.atrribute
                    )}
                    onChange={(options) =>
                      setFieldValue("atrribute", options ? options.value : null)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={6}>
                <Form.Group className="mb-3">
                  <FormLabel>Atrribute value</FormLabel>
                  <Select
                    options={options}
                    name="atrributeValue"
                    value={options.find(
                      (options) => options.value === values.atrributeValue
                    )}
                    onChange={(options) =>
                      setFieldValue(
                        "atrributeValue",
                        options ? options.value : null
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <Col md={6} sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Create new attribute</Form.Label>
                  <Field
                    as={FormControl}
                    disabled={false}
                    placeholder="first chose or create category"
                    name="newAttr"
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Attribute value</Form.Label>
                  <Field
                    as={FormControl}
                    disabled={false}
                    placeholder="first chose or create category"
                    name="newAttrValue"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Image upload component */}
            <ImageUpload
              handleImageChange={(file) => setFieldValue("image", file)}
              multiple
            />
            <ErrorMessage
              name="image"
              component="div"
              className="error-message"
            />

            <Button type="submit" disabled={isSubmitting} className="mt-3">
              Create
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
          <Button as={Link} to="/admin/products">
            Go Back
          </Button>
        </Col>
        <Col md={6}>
          <h1>Create a new product</h1>
          <ProductCreateForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCreateProductPage;
