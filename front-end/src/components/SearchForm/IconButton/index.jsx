import React from "react";
import "./IconButton.scss";

/*
A reusable button that contains only icon.
svgIcon must be passed by passed by props after being
imported as ReactComponent.
id is optional for css customization.
*/
const IconButton = ({ svgIcon, id, type }) => {
  return (
    <button className="svg-icon-button" id={id} type={type}>
      {svgIcon}
    </button>
  );
};

export default IconButton;
