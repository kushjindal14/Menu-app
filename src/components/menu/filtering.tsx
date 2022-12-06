import { ChangeEventHandler } from "react";
import { IProduct } from "../../types/common.types";
import "./filter-products.scss";

interface FProps{
  SortedItems:{
    category:string;
    items:IProduct[];
  }[]
  onFilterchange:ChangeEventHandler;
}

const Filter = ({ SortedItems, onFilterchange}: FProps) => {
  return (
    <div>
      {SortedItems.map((filteredResult: any) => (
        <div key={filteredResult.category}>
        <div className="filtering-checkbox">
          <input type="checkbox" onChange={onFilterchange} value={filteredResult.category}/>
          <label>{filteredResult.category}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
