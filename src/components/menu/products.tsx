import { Component, useEffect, useState } from "react";
import axios from "axios";
import List from "./list-view";
import Grid from "./grid-view";
import { IProduct } from "../../types/common.types";
import "./product.scss";
import Switch from "./switch";
import Filter from "./filtering";


const Product = () => {
  const [product, setProduct] = useState([]);
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

  const searchHandle = async (event:any) =>{
    let key= event.target.value;
    let data = await axios.get('https://fakestoreapi.com/products/ +{key}');
    if(data){
      setProduct(data.data);
        }
  }


  if (!product.length) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <Switch onClick={() => setActive(!active)} />
      </div>
      <hr />
      <div className="top-info">
      <h3 className="total-products">Found total {product.length} items</h3>
      <div className="search-field">
      <input placeholder="Search" onChange={searchHandle}/>
      </div>
      </div>
      <hr />
      <div className="products">
        <div>
          <h3>CATEGORIES</h3>
           <Filter props={filteredResults}/>
        </div>
        <div className="division-left">
          {filteredResults.map((filteredResult) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
