import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import './Product.css';

const Product = (props) => {
  const { name, image, price, ratings } = props.product;

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <h2> {name}</h2>
        <p>Price: ${price}</p>
        <p>
          <small>Ratings: {ratings} Stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="button-cart"
      >
        ADD TO CART
        <FontAwesomeIcon className="btn-icon" icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
