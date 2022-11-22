
import { useEffect, useState } from "react";
import { IProduct } from "../../types/common.types";


const filter =() =>{
return(
        <form>
            <h3>Filter Products</h3>
            <div>
                <input type="checkbox"/>
                <label>Men's Clothing</label>
            </div>
             <div>
                <input type="checkbox"/>
                <label>Jewelery</label>
            </div>
             <div>
                <input type="checkbox"/>
                <label>Electronics</label>
            </div>
             <div>
                <input type="checkbox"/>
                <label>Women's Clothing</label>
            </div>
        </form>  
      
)
}

export default filter;