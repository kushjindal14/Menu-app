import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./list-view";
import Grid from "./grid-view";
import { IProduct } from "../../types/common.types";
import "./main.scss";

const Product = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const cat = new Set(
    product.map((item) => {
      return item.category;
    })
  );
  console.log(cat);

  // const filteredResults = new Set(
  //   product.map((item) => {
  //     return {
  //       items: product.filter((item) => cat),
  //     };
  //   })
  // );

  // const filteredData = [
  //   {
  //     category: "men's clothing",
  //     items: [{ filteredResults }],
  //   },
  //   {
  //     category: "men's clothing",
  //     items: [{ filteredResults }],
  //   },
  //   {
  //     category: "men's clothing",
  //     items: [{ filteredResults }],
  //   },
  //   {
  //     category: "men's clothing",
  //     items: [{ filteredResults }],
  //   },
  // ];
  // console.log(filteredData);

  if (!product.length) return <div>Loading...</div>;
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={() => setActive(!active)} />
        <span className="slider"></span>
      </label>
      <h3 className="total-products">Found {product.length} items</h3>
      <>
        {product.map((item: IProduct) => (
          <>
            {active ? (
              <div className="lists-items">
                <List item={item} />
              </div>
            ) : (
              <div className="grid-items">
                <Grid item={item} />
              </div>
            )}
          </>
        ))}
      </>
    </div>
  );
};

export default Product;

// JSX element
// JSX element in map func

// {active ? (
//   <div className="lists-items">
//       return <List item={item} />;
//     })}
//   </div>
// ) : (
//   <div className="grid-items">
//     {product.map((item: IProduct) => {
//       return <Grid item={item} />;
//     })}
//   </div>
// )}
