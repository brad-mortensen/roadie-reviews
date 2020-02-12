import React from "react";

const Review = ({ children }) => {
  return (
    <div
      className="review"
      style={{
        border: "1px solid lightgrey",
        width: "44%",
        marginBottom: "20px",
        maxHeight: "300px",
        padding: "20px 10px",
        borderRadius: "2px"
      }}
    >
      {children}
    </div>
  );
};

export default Review;
