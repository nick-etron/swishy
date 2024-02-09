import React from "react";
import { useState, useEffect } from "react";
const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  async function getProduct() {
    const url = await fetch("https://dummyjson.com/products");
    const data = await url.json();
    setProduct(data.products);
  }

  return (
    <div className="container">
      <div className="grid grid-cols-4">
        {product.map((item) => {
          return (
            <div className=" p-3 mx-2">
              <div className="product-img">
                <img src={item.thumbnail} />
              </div>
              <p className="product-title">{item.title}</p>
              <div className="flex justify-between">
                <p className="product-price">{item.price} $</p>
                <p className="product-discount">
                  {item.discountPercentage} off
                </p>
              </div>

              <p>{item.description}</p>

              <p>{item.rating}</p>
              <p>{item.brand}</p>
              <p>{item.category}</p>
            </div>
          );
        })}
      </div>
      <h1>item</h1>
    </div>
  );
};

export default Home;
