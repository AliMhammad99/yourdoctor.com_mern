import * as React from "react";
import { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./SignUp.css";
import GlobalStates from "../../utils/GlobalStates";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const globalStates = useContext(GlobalStates);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    globalStates.setSnackBar((previousState) => {
      return { ...previousState, open: false };
    });
  };
  return (
    <Snackbar
      open={globalStates.snackBar.open}
      className="snack"
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        className="alert"
        severity={globalStates.snackBar.severity}
        sx={{ width: "120%" }}
      >
        {globalStates.snackBar.message}
      </Alert>
    </Snackbar>
  );
}
