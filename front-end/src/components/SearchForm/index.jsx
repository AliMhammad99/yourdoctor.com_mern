import React from "react";
import DropDownBox from "./DropDownBox";
import IconButton from "./IconButton";
import { ReactComponent as SearchIcon } from "../../assets/icon_search.svg";
import { ReactComponent as SpecialtyIcon } from "../../assets/icon_specialty.svg";
import { ReactComponent as DoctorIcon } from "../../assets/icon_doctor.svg";
import { Link } from "react-router-dom";
import "./SearchForm.scss";
function SearchForm({ className }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form id="search-form" onSubmit={handleSubmit} className={className}>
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
      <Link to="/findyourdoctor/6268ef5b632cfdc52242206d">
        <IconButton svgIcon={<SearchIcon />} id="search-button" type="submit" />
      </Link>
    </form>
  );
}
export default SearchForm;
