import React, { useContext } from "react";
import "./DropDownMenu.scss";
import SearchFormContext from "../SearchFormContext";

function DropDownMenu({ menuItems, menuTitle, setChipItem }) {
  const searchFormContext = useContext(SearchFormContext);
  return (
    <ul className="drop-down-menu">
      <h2>{menuItems.length === 0 ? "No Results" : menuTitle}</h2>
      {menuItems.map((menuItem, index) => {
        return (
          <li
            className="drop-down-menu-item"
            key={index}
            onClick={() => {
              setChipItem(menuItem);
              searchFormContext.setSpecialtyId(menuItem.item_id);
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
