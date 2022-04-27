import React from "react";
import "./DropDownMenu.scss";

function DropDownMenu({ menuItems, searchKeyword, isLoading }) {
  return (
    <ul className="drop-down-menu">
      {menuItems.map((menuItem, index) => {
        return (
          <li className="drop-down-menu-item" key={index}>
            {menuItem}
          </li>
        );
      })}
    </ul>
  );
}

export default DropDownMenu;
