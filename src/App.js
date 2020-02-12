import React, { useEffect, useState } from "react";
import SteinStore from "stein-js-client";

import Review from "./components/Review";
import ProductInfo from "./components/ProductInfo";

const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5e43334a5a823204986f3b6e"
);

const bottomStyles = {
  display: "flex",
  flexFlow: "row",
  width: "100%"
};
const reviewsStyles = {
  display: "flex",
  justifyContent: "space-between",
  flexFlow: "row wrap",
  width: "70%"
};
console.log(store);
const App = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => await store.read("Sheet1");
    fetchData().then(data => setReviews(data));
  }, []);
  return (
    <div
      className="container"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "25px" }}
    >
      <ProductInfo />
      <div className="bottom-content" style={bottomStyles}>
        <div
          className="review-overview-container"
          style={{ width: "30%" }}
        ></div>
        <div className="reviews-container" style={reviewsStyles}>
          {reviews ? (
            reviews.map(({ id, title, body, dateCreated, user, rating }) => (
              <Review key={id}>
                <h3 style={{ fontWeight: "bold" }}>{title}</h3>
                <p style={{ width: "100%", textAlign: "right" }}>{rating}</p>
                <p style={{ fontSize: "1rem" }}>
                  by {user} on {dateCreated}
                </p>
                <p style={{ textOverflow: "ellipses", marginTop: "10px" }}>
                  {body}
                </p>
              </Review>
            ))
          ) : (
            <p>No Data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
