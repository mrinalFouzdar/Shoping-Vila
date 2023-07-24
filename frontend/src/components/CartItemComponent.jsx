import React from "react";
import { Button, Col, Image, ListGroupItem, Row } from "react-bootstrap";
import CustomSelect from "./Ui Components/CustomSelect/CutomSelect";

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];








// const CustomMenu = (props) => {
//   return (
//     <components.Menu {...props}>
//       {props.children}
//       <components.MenuList>
//         <components.Option key="search" value="search" isDisabled>
//           {/* <span role="img" aria-label="search-icon">
//             // 🔍
//           </span>{" "} */}
//           Search...
//         </components.Option>
//         {extraOptions.map((option) => (
//           <components.Option key={option.value} value={option.value}>
//             {option.label}
//           </components.Option>
//         ))}
//       </components.MenuList>
//     </components.Menu>
//   );
// };


// const CustomMenuList =({selectProps,...props})=>{

//   return(
//     <div>

//     </div>
//   )
// }






const CartItemComponent = () => {
  return (
    <ListGroupItem>
      <Row>
        <Col md={2} sm={2}>
          <Image
            src="/images/nothing phone.webp"
            fluid
            // style={{ maxHeight: "80px" }}
          />
        </Col>
        <Col md={2} sm={2}>
          Product <br />
          Nothing Phone
        </Col>
        <Col md={2} sm={2}>
          Price <span className="fw-bold">${200}</span>{" "}
        </Col>
        <Col md={4} sm={4}>
          {/* <Select
                 options={options}
                 formatOptionLabel={formatOptionLabel}
                 components={{
                   DropdownIndicator,
                 }}
                 placeholder="Select an option..."
                 isSearchable

           /> */}
           <CustomSelect options={options}/>

        </Col>
        <Col md={2} sm={2}>
          <Button
            type="button"
            variant="secondary"
            onClick={() => window.confirm("Are you sure?")}
          >
            <i className="bi bi-trash3-fill"></i>
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};





export default CartItemComponent;
