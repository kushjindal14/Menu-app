import { ChangeEventHandler } from "react";
import { IProduct } from "../../types/common.types";
import "./filter-products.scss";

interface FProps{
  SortedItems:{
    category:string;
    items:IProduct[];
  }[]
  onChange:ChangeEventHandler;
}

const Filter = ({ SortedItems, onChange}: FProps) => {
  return (
    <div>
      {SortedItems.map((filteredResult: any) => (
        <div className="filtering-checkbox">
          <input type="checkbox" onChange={onChange}/>
          <label>{filteredResult.category}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
