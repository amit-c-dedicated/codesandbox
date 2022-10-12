import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product";
// import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    if (cart.length >= 4) {
      return;
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };

  const chooseOneProductForMeHandler = () => {
    setCart([cart[Math.floor(Math.random() * cart.length)]]); // Here I'm choosing one randomly, but you could change the logic to whatever you want
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart
          key={cart.id}
          cart={cart}
          choseOeProductForMeHandler={chooseOneProductForMeHandler}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
