import React from "react";
import { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import ClearButton from "../ClearButton";
import "./DropDownBox.scss";

//DropDownMenu Lazy import (will be imported when needed for rendering)
//The setTimeout is only for testing purpose to simulate slow connection
// const DropDownMenu = React.lazy(() =>
//   import("../DropDownMenu").then((module) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(module);
//       }, 1000);
//     });
//   })
// );
//This is the one that should be used really:
const DropDownMenu = React.lazy(() => import("../DropDownMenu"));

function DropDownBox({ svgIcon, hint, id }) {
  //States
  const [focused, setFocused] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
  const clearSearchKeyword = () => {
    setSearchKeyword("");
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
      <Suspense fallback={<LoadingSpinner />}>
        {
          //Render DropDownMenu only on focus
          focused && (
            <DropDownMenu
              menuItems={[
                "Item1",
                "Item2",
                "Item3",
                "Item4",
                "Item",
                "Item",
                "Item",
                "Item",
                "Item",
                "Item",
                "Item",
                "Item",
                "Item",
                "Item",
              ]}
            />
          )
        }
      </Suspense>
      {isLoading && <LoadingSpinner />}
      {searchKeyword && !isLoading && (
        <ClearButton onClick={clearSearchKeyword} />
      )}
    </div>
  );
}
export default DropDownBox;
