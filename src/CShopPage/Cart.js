import React from "react";
// import './Cart.css';

const Cart = ({ cart, chooseOneProductForMeHandler }) => {
  return (
    <div className="cart">
      <h4>Selected Items</h4>
      <div>
        {cart.map((item) => (
          <h4 key={item.id} className="cart-brand-name">
            <img src={item.image} alt="" /> {item.name}
          </h4>
        ))}
      </div>
      <div>
        <button
          className="button-1"
          onClick={() => chooseOneProductForMeHandler()}
        >
          <p>CHOOSE 1 FOR ME</p>
        </button>
        <button className="button-2">
          <p>CHOOSE AGAIN</p>
        </button>
        <p>
          <small>You can select up to 4 items</small>
        </p>
      </div>
    </div>
  );
};

export default Cart;
