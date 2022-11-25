import "./filter-products.scss";

interface props {
  props: any;
}

const Filter = ({ props }: props) => {
  return (
    <div>
      {props.map((filteredResult:any) => (
        <div className="filtering-checkbox">
          <input type="checkbox" />
          <label>{filteredResult.category}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
