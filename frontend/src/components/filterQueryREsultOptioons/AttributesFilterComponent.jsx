import React from "react";
import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[{ color: ["red", "blue", "green"] }, { ram: ["1 TB", "2 TB"] }].map(
        (item, idx) => (
          <div key={idx} className="mb-3">
            <Form.Label>{Object.keys(item)}</Form.Label>
            {item[Object.keys(item)].map(( itemName, idx) =>(
              <Form.Check key={idx} type="checkbox" id="default-checkbox" label={itemName} />

            ))}
          </div>
        )
      )}
    </>
  );
};

export default AttributesFilterComponent;
