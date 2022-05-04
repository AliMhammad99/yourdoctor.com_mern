import React, { useState } from "react";
import "./DropDownMenu.scss";

function DropDownMenu({ menuItems, menuTitle, setChipItem }) {
  // const [menuItems, setMenuItems] = useState([]);
  // console.log(menuItems);

  //Functions
  const handleItemClick = (menuItem) => {
    console.log("CLICK");
    console.log(menuItem);
  };
  return (
    <ul className="drop-down-menu">
      <h2>{menuItems.length === 0 ? "No Results" : menuTitle}</h2>
      {menuItems.map((menuItem, index) => {
        return (
          <li
            className="drop-down-menu-item"
            key={index}
            onClick={() => {
              handleItemClick(menuItem);
            }}
          >
            {menuItem.item_name}
          </li>
        );
      })}
    </ul>
  );
}

export default DropDownMenu;
