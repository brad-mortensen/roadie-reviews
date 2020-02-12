import React from "react";
import communicator from "../assets/communicator.jpg";

const productInfoStyles = {
  width: "100%",
  display: "flex",
  marginBottom: "20px"
};
const ProductInfo = () => {
  return (
    <div className="product-info" style={productInfoStyles}>
      <div
        className="image-container"
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={communicator}
          alt="Roadie Communicator"
          style={{ width: "80%" }}
        />
      </div>
      <div className="info-container" style={{ width: "70%" }}>
        <div className="text-container" style={{ width: "100%" }}>
          <h1>ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</h1>
          <p>
            by <span style={{ fontWeight: "bold" }}>Roadie</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            mi sed tortor maximus interdum.
          </p>
          <li>
            Duis pellentesque lorem vel sapien interdum elementum. Etiam
            pharetra viverra auctor.
          </li>
        </div>
        <div className="button-container">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
