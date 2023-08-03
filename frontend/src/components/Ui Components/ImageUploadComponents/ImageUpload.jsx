// ImageUpload.js
import React, { useState } from "react";
import { Form, FormLabel } from "react-bootstrap";

const ImageUpload = ({ handleImageChange, multiple }) => {
  const [selectedImage, setSelectedImage] = useState([]);

  const handleFileChange = (event) => {
    const files = event.currentTarget.files;
    console.log(event.currentTarget.files);
    if (files.length > 0) {
      setSelectedImage((prevImage) => [...prevImage, ...files]);
      handleImageChange(multiple ? [...selectedImage, ...files] : files[0]);
    }
  };

  return (
    <Form.Group contextMenu="formFile" className="mb-3">
      <FormLabel>Image</FormLabel>
      <Form.Control
        type="file"
        name="image"
        accept="image/*"
        onChange={(event) => {
          handleFileChange(event);
        }}
        multiple={multiple}
      />
      {selectedImage.length > 0 && (
        <div>
          {selectedImage.map((image, index) => (
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected ${index+1}`}
              style={{ maxWidth: "200px", marginTop: "10px" }}
              key={index}
            />
          ))}
        </div>
      )}
    </Form.Group>
  );
};

export default ImageUpload;
