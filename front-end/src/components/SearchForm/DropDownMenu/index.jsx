import { useEffect, useRef, useState } from "react";
import useClickDetect from "./useClickDetect";
import "./DropDownMenu.scss";

function DropDownMenu({ svgIcon, hint, id }) {
  //States
  const [focused, setFocused] = useState(false);

  //Refs
  const dropDownBoxRef = useRef();

  //Effects
  // useEffect(() => {
  //   /*Called whenever setFocused is called*/
  //   dropDownBoxRef.current.querySelector(".drop-down-input").focus();
  // }, [focused]);
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       dropDownBoxRef.current &&
  //       !dropDownBoxRef.current.contains(event.target)
  //     ) {
  //       setFocused(false);
  //     }
  //   }
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropDownBoxRef]);
  //Functions
  // const requestFocus = () => {
  //   // dropDownBoxRef.current.setFocused(true);
  //   setFocused(true);
  // };
  //Functions
  const requestFocus = () => {};
  return (
    <div
      onClick={() => {
        setFocused(true);
      }}
      className={`drop-down-box ${focused ? "focused" : ""}`}
      id={id}
      ref={dropDownBoxRef}
    >
      {svgIcon}
      <input type="text" placeholder={hint} className="drop-down-input" />
    </div>
  );
}
export default DropDownMenu;
