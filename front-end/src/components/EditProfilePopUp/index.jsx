import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import UploadPhoto from "../UploadPhoto";
import GlobalStates from "../../utils/GlobalStates";
import { useContext } from "react";
import "./styles.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditProfilePopUp = () => {
  const [open, setOpen] = React.useState(false);
  const globalStates = useContext(GlobalStates);

  const handleClose = () => {
    globalStates.setEditProfilePopUp(false);
  };

  return (
    <div>
      <Dialog
        open={globalStates.editProfilePopUp}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        id="edit_dialog"
      >
        <div id="edit_popUp_content">
          <DialogTitle id="title">Edit Profile</DialogTitle>
          <DialogContent id="content">
            {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
            <UploadPhoto />
          </DialogContent>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditProfilePopUp;
