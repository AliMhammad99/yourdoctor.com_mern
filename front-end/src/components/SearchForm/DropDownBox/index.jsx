import { useEffect, useRef, useState } from "react";
import "./DropDownBox.scss";

function DropDownMenu({ svgIcon, hint, id }) {
  //States
  const [focused, setFocused] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  //Refs
  const dropDownBoxRef = useRef();

  //Effects
  useEffect(() => {
    /*Called whenever setFocused is called*/
    if (focused) {
      focusDropDownInput();
    } else {
      unfocusDropDownInput();
    }
  }, [focused]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropDownBoxRef.current &&
        !dropDownBoxRef.current.contains(event.target)
      ) {
        setFocused(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownBoxRef]);

  // Functions;
  const handleFocus = () => {
    setFocused(true);
    focusDropDownInput();
  };
  const focusDropDownInput = () => {
    dropDownBoxRef.current.querySelector(".drop-down-input").focus();
  };
  const unfocusDropDownInput = () => {
    dropDownBoxRef.current.querySelector(".drop-down-input").blur();
  };
  return (
    <div
      onClick={handleFocus}
      className={`drop-down-box ${focused ? "focused" : ""}`}
      id={id}
      ref={dropDownBoxRef}
    >
      {svgIcon}
      <input
        type="text"
        value={searchKeyword}
        onChange={(event) => {
          setSearchKeyword(event.target.value);
        }}
        placeholder={hint}
        className="drop-down-input"
      />
      <DropDownMenu />
    </div>
  );
}
export default DropDownMenu;
