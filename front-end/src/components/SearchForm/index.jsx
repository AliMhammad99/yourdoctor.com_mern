import React from "react";
import DropDownMenu from "./DropDownMenu";
import IconButton from "./IconButton";
import { ReactComponent as SearchIcon } from "../../assets/icon_search.svg";
import { ReactComponent as SpecialtyIcon } from "../../assets/icon_specialty.svg";
import { ReactComponent as DoctorIcon } from "../../assets/icon_doctor.svg";
import "./SearchForm.scss";
function SearchForm() {
  return (
    // <form id="search-form">
    <DropDownMenu svgIcon={<SpecialtyIcon />} hint={"Specialty"} />
    // <DropDownMenu svgIcon={<DoctorIcon />} hint={"Doctor Name (optional"} />
    // <IconButton svgIcon={<SearchIcon />} id="search-button" />
    // </form>
  );
}
export default SearchForm;
