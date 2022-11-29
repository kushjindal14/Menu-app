import { MouseEventHandler } from "react";
import "./searchbox.scss";

interface props{
    onChange:React.ChangeEventHandler
}

const Search = ({onChange}:props) => {
  return (
    <div className="search-field">
      <input placeholder="Search" onChange={onChange} />
    </div>
  );
};
export default Search;
