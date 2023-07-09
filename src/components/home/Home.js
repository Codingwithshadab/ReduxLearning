import React from "react";
import { Link } from "react-router-dom";
const HomeComp = ({ data }) => {
  const { item, addCartItem, cartText } = data;
  const { title, price, images, id } = item;
  return (
    <>
      <div className="col-md-4" key={id}>
        <div className="cartWrap">
          <div className="imgWrap">
            <Link to={`/product-detail/${id}`}>
              <img
                src={images[0]}
                alt="Product"
                className="img-fluid"
                style={{width: "40%"}}
              />
            </Link>
          </div>
          <div className="textWrap">
            <h4>{title}</h4>
            <p>Price: {price}</p>
            <button
              className="btn btn-danger bg-gradient text-uppercase"
              onClick={() => {
                addCartItem(item, id);
              }}
            >
              {cartText ? "Added" : "Add to Cart" }
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComp;
