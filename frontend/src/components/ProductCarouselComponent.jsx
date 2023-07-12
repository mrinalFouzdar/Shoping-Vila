import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCarouselComponent = () => {
  return (
    // <div style={{   height: "100px !important" }}>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover "
          // style={{height:"40vh"}}
          height={400}
          src="/images/carousel/photography products.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/product-details">
            <h3 style={{ color: "whitesmoke" }}>
              Bestseller in Laptops Category
            </h3>
          </Link>
          <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          height={400}
          src="images/carousel/Product+Photography.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Link to="/product-details">
            <h3 style={{ color: "whitesmoke" }}>
              Bestseller in Laptops Category
            </h3>
          </Link>
          <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          height={400}
          src="images/carousel/watch image.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Link to="/product-details">
            <h3 style={{ color: "whitesmoke" }}>
              Bestseller in Cameras Category
            </h3>
          </Link>
          <p>
            4K Camcorder Video Camera 60FPS 48MP Vlogging Camera for YouTube 
            WIFI 16X Digital Camera
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </div>
  );
};

export default ProductCarouselComponent;
