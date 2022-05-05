import React from "react";
import { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import Chip from "@mui/material/Chip";
import LoadingSpinner from "../LoadingSpinner";
import ClearButton from "../ClearButton";
import "./DropDownBox.scss";
import SpecialtyDataService from "../../../services/specialty";
import DoctorDataService from "../../../services/doctor";

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

function DropDownBox({ svgIcon, hint, collection, id }) {
  //States
  const [focused, setFocused] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dropDownMenuItems, setdropDownMenuItems] = useState([]);
  const [chipItem, setChipItem] = useState({
    // item_id: "12312312",
    // item_name: "Item Name",
  });

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

  useEffect(() => {
    fetchListItems();
  }, [searchKeyword]);

  // Functions;
  const handleFocus = () => {
    setFocused(true);
    focusDropDownInput();
  };
  const focusDropDownInput = () => {
    dropDownBoxRef.current.querySelector(".drop-down-input")?.focus();
  };
  const unfocusDropDownInput = () => {
    // const textInput =
    dropDownBoxRef.current.querySelector(".drop-down-input")?.blur();
  };
  const clearSearchKeyword = () => {
    setSearchKeyword("");
    setChipItem({});
    focusDropDownInput();
  };
  const fetchListItems = () => {
    setIsLoading(true);
    if (collection == "specialty") {
      SpecialtyDataService.getSpecialtyByName(searchKeyword)
        .then((res) => {
          var menuItems = [];
          res.data.forEach((result) => {
            menuItems.push({
              item_id: result._id,
              item_name: result.specialty_name,
            });
          });
          setdropDownMenuItems(menuItems);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (collection == "doctor") {
      DoctorDataService.getDoctorByName(searchKeyword)
        .then((res) => {
          var menuItems = [];
          res.data.forEach((result) => {
            menuItems.push({
              item_id: result.basic_user_id,
              item_name:
                result.basic_user_details.first_name +
                " " +
                result.basic_user_details.last_name,
            });
          });
          setdropDownMenuItems(menuItems);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };
  return (
    <div
      onClick={handleFocus}
      className={`drop-down-box ${focused ? "focused" : ""}`}
      id={id}
      ref={dropDownBoxRef}
    >
      {svgIcon}
      {Object.keys(chipItem).length === 0 ? (
        <input
          type="text"
          value={searchKeyword}
          onChange={(event) => {
            handleSearchKeywordChange(event);
          }}
          placeholder={hint}
          className="drop-down-input"
        />
      ) : (
        <Chip label={chipItem.item_name} />
      )}
      <Suspense fallback={<LoadingSpinner />}>
        {
          //Render DropDownMenu only on focus
          focused && Object.keys(chipItem).length === 0 && (
            <DropDownMenu
              menuItems={dropDownMenuItems}
              menuTitle={
                searchKeyword
                  ? "Search results for '" + searchKeyword + "'"
                  : "All results"
              }
              setChipItem={setChipItem}
            />
          )
        }
      </Suspense>
      {isLoading && <LoadingSpinner />}
      {((searchKeyword && !isLoading) || Object.keys(chipItem).length != 0) && (
        <ClearButton onClick={clearSearchKeyword} />
      )}
    </div>
  );
}
export default DropDownBox;
