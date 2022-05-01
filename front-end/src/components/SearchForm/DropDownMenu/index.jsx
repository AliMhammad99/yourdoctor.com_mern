import React, { useState } from "react";
import "./DropDownMenu.scss";

function DropDownMenu({ menuItems, searchKeyword, isLoading }) {
  // const [menuItems, setMenuItems] = useState([]);
  console.log(menuItems);

  //Functions
  const handleItemClick = (specialty_id) => {
    console.log("CLICK");
    console.log(specialty_id);
  };
  return (
    <ul className="drop-down-menu">
      {menuItems.map((menuItem, index) => {
        return (
          <li
            className="drop-down-menu-item"
            key={index}
            onClick={() => {
              handleItemClick(menuItem._id);
            }}
          >
            {menuItem.specialty_name}
          </li>
        );
      })}
    </ul>
  );
}

export default DropDownMenu;
