import React from "react";

const DropDownItems = ({ menuItems, selectedElements, handleSelect}) => {
  return (
    <ul style={{listStyleType:"none"}}>
      {menuItems.map(item=> (
        <li className="dropdown-item" style={{whiteSpace:"nowrap"}} key={item}>
          <input
            type="checkbox"
            onChange={() => {}}
            checked={selectedElements.includes(item)}
            onClick={e => {
              handleSelect(e, item);
            }}
          />
          <label style={{paddingTop:"5px", paddingRight:"10px", paddingLeft:"5px"}}> {item}</label>
        </li>
      ))}
    </ul>
  );
};

export default DropDownItems;