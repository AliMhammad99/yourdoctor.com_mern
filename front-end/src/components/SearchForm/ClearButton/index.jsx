import { ReactComponent as XIcon } from "../../../assets/icon_x.svg";
import "./ClearButton.scss";
const ClearButton = ({ onClick }) => {
  return (
    <button className="box-clear-button" onClick={onClick}>
      <XIcon />
    </button>
  );
};
export default ClearButton;
