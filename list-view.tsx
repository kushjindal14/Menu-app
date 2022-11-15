import "./list.scss";
import { IProduct } from "../Types/common.types";

interface IProps {
  item: IProduct;
}
const List = ({ item }: IProps) => {
  return (
    <ol className="list-styles">
      <li className="list-image">{<img src={item.image}></img>}</li>
      <p className="right-to-image">
        <li>
          <b>TITEL:</b> {item.title}
        </li>
        <li>
          <b>CATEGORY:</b> {item.category}
        </li>
        <li>
          <b>RATING RATE:</b> {item.rating.rate}
        </li>
        <li>
          <b>RATING COUNT:</b>
          {item.rating.count}
        </li>
        <li>
          <b>DESCRIPTION:</b> {item.description}
        </li>
        <button>Rs.{item.price} - ADD TO CART</button>
      </p>
    </ol>
  );
};

export default List;
