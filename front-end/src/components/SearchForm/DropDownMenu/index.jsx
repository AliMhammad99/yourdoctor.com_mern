import "./DropDownMenu.scss";
function DropDownMenu({ svgIcon, hint, id }) {
  return (
    <div className="drop-down-box">
      {svgIcon}
      <input type="text" placeholder={hint} className="drop-down-input" />
    </div>
  );
}
export default DropDownMenu;
