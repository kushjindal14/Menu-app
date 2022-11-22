import  { useEffect, useState } from "react";
import axios from "axios";
import List from "./list-view";
import Grid from "./grid-view";
import { IProduct } from "../../types/common.types";
import "./main.scss";
import Switch from "./switch";

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
      items: product.filter((item: IProduct) => item.category === category),
    };
  });

  if (!product.length) return <div>Loading...</div>;
  return (
    <div>
    <div>
      <div><Switch onClick={() => setActive(!active)}/></div>
      <hr />
      <h3 className="total-products">Found total {product.length} items</h3>
      <hr />
        {filteredResults.map((filteredResult) => (
            <div className="products">
               <div className="filtering-checkbox">
                <input type="checkbox"/>
                <label>{filteredResult.category}</label>
              </div>
          <div>
            <div className="categories">
              {filteredResult.category} ({filteredResult.items.length})
            </div>
            {filteredResult.items.map((item: IProduct) => (
              <div>
                {active ? (
                  <div className="lists-items">
                  <List item={item} /> 
                  </div>
                ) : (
                  <div className="grid-items">
                    <Grid item={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        ))}
      </div>
      </div>
 
  );
};

export default Product;
