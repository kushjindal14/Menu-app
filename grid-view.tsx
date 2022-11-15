import "./grid.scss";
import { IProduct } from "../Types/common.types";

interface IProps {
  item: IProduct;
}

const Grid = ({ item }: IProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.image}></img>
      </div>
      <div className="card-title">
        <b>TITEL:</b> {item.title}
      </div>
      <div className="card-category">
        <b>CATEGORY:</b> {item.category}
      </div>
      <div className="card-rating-rate">
        <b>RATING RATE:</b> {item.rating.rate}
      </div>
      <div className="card-rating-count">
        <b>RATING COUNT:</b> {item.rating.count}
      </div>
      <div className="card-description">
        <b>DESCRIPTION:</b> {item.description}
      </div>
      <div className="card-button">
        <button>Rs.{item.price} - ADD TO CART</button>
      </div>
    </div>
  );
};

export default Grid;
