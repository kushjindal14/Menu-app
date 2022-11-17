import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./list-view";
import Grid from "./grid-view";
import { IProduct } from "../../types/common.types";
import "./main.scss";
import { DiagnosticCategory, idText, isTemplateExpression } from "typescript";

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

  const categories = product.map((item: IProduct) => {
    return item.category;
  });
  const uCategories = categories.filter(
    (item: string, index: number) => categories.indexOf(item) === index
  );

  const filteredResults = uCategories.map((category: string) => {
    return {
      category,
      // items: product
      //   .map((item: IProduct) => {
      //     if (item.category === category) {
      //       return item;
      //     }
      //   })
      //   .filter(Boolean),
      items: product.filter((item: IProduct) => item.category === category),
    };
  });

  console.log(filteredResults);

  if (!product.length) return <div>Loading...</div>;
  return (
    <div>
      <div className="top">
        <h3>List</h3>
        <label className="switch">
          <input type="checkbox" onClick={() => setActive(!active)} />
          <span className="slider"></span>
        </label>
        <h3>Grid</h3>
      </div>
      <hr />
      <h3 className="total-products">Found total {product.length} items</h3>
      <hr />
      <>
        {filteredResults.map((filteredResult) => (
          <>
           <div>{filteredResult.category}</div>
           {filteredResult.items.map((item:IProduct)=>(
            <List item={item}/>
           )
            
           )}
          </>
        ))}
      </>
    </div>
  );
};

export default Product;
//  {active ? (
//               <div className="lists-items">
//                 <h3 className="display-list-categories">
//                   {uCategories.category}
//                 </h3>
//                 <List item={uCategories} />
//               </div>
//             ) : (
//               <div className="grid-items">
//                 <h3 className="display-grid-categories">
//                   {uCategories.category}{" "}
//                 </h3>
//                 <Grid item={uCategories} />
//               </div>
//             )}