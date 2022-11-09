import axios from "axios";
import React, { useEffect, useState } from "react";
import './main.css';

const Product =()=> {
  const [product, setProduct] = useState<IDispaly[]>([]);
  const getdata = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
};


  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="product-items">
        <h3 className="total-products">Found {product.length} items</h3>
        {product.map((item) => {
          return (
        <ol className="list-styles">
        <li>{<img src={item.image} style={{ width:"150px", height:"150px" }}></img>}</li>
        <p className="right-to-image">
        <li><b>TITEL:</b> {item.title}</li>
        <li><b>CATEGORY:</b> {item.category}</li>
        <li><b>RATING:</b> {item.rating.rate}</li>
        <li><b>RATING COUNT:</b>{item.rating.count}</li>
        <li><b>DESCRIPTION:</b> {item.description}</li>
        <button>Rs.{item.price} - ADD TO CART</button>
        </p>
      </ol>
          );
        })}
     
    </div>
  );
}

export default Product;
