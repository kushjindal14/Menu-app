import axios from "axios";
import { useEffect, useState } from "react";
import List from "./list-view";
import Grid from "./grid-view";
import "./main.scss";
import { IProduct } from "../Types/common.types";
import { isTemplateExpression } from "typescript";
import { getEnabledCategories } from "trace_events";


const Product = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const getdata = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProduct(data.data)
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

  const filteredResults =new Set(
product.map((item)=>{
  return{
    items:product.filter((item)=>cat)
  }
}))


const filteredData=[
  {
    category:"men's clothing",
    items:[{filteredResults}]
  },
  {
    category:"men's clothing",
    items:[{filteredResults}]
  },
  {
    category:"men's clothing",
    items:[{filteredResults}]
  },
  {
    category:"men's clothing",
    items:[{filteredResults}]
  },
]
console.log(filteredData);


  const [active, setActive] = useState(true);
  useEffect(() => {
    getdata();
  }, []);

  if (!product.length) return <div>Loading...</div>;
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={() => setActive(!active)} />
        <span className="slider"></span>
      </label>
      <h3 className="total-products">Found {product.length} items</h3>
      <>
        {active ? (
          <div className="lists-items">
            {product.map((item: IProduct) => {
              return <List item={item} />;
            })}
          </div>
        ) : (
          <div className="grid-items">
            {product.map((item: IProduct) => {
              return <Grid item={item} />;
            })}
          </div>
        )}
      </>
    </div>
  );
};

export default Product;
