import React, { useState, createContext } from "react";
import DropDownBox from "./DropDownBox";
import IconButton from "./IconButton";
import { ReactComponent as SearchIcon } from "../../assets/icon_search.svg";
import { ReactComponent as SpecialtyIcon } from "../../assets/icon_specialty.svg";
import { ReactComponent as DoctorIcon } from "../../assets/icon_doctor.svg";
import { Link } from "react-router-dom";
import SearchFormContext from "./SearchFormContext";
import "./SearchForm.scss";
function SearchForm({ className }) {
  const [specialtyId, setSpecialtyId] = useState("all");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form id="search-form" onSubmit={handleSubmit} className={className}>
      <SearchFormContext.Provider value={{ setSpecialtyId }}>
        <DropDownBox
          svgIcon={<SpecialtyIcon />}
          hint={"Specialty"}
          collection="specialty"
        />
        <DropDownBox
          svgIcon={<DoctorIcon />}
          hint={"Doctor Name (optional)"}
          collection="doctor"
        />
      </SearchFormContext.Provider>
      <Link
        to={`/findyourdoctor/${specialtyId}`}
        className="search-button-link"
      >
        <IconButton svgIcon={<SearchIcon />} id="search-button" type="submit" />
      </Link>
    </form>
  );
}
export default SearchForm;
