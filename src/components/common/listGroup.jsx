import React from "react";

const ListGroup = ({
  items,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item}
          style={item === selectedItem ? {backgroundColor:"#e3e0e0", borderColor: "black", color:"black"} : {backgroundColor:"white"}} 
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
