import "./switch.scss";

interface props{
  onClick : React.MouseEventHandler
}

const Switch =({onClick}: props)=>{
    return <div className="top">
          <h3>List</h3>
          <label className="switch">
            <input type="checkbox" onClick={onClick} />
            <span className="slider"></span>
          </label>
          <h3>Grid</h3>
        </div>
        
}

export default Switch;