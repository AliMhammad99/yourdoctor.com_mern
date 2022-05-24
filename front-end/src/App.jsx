import React, { useEffect, useState } from "react";
import GlobalStates from "./utils/GlobalStates";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Guest from "./pages/Guest";
import Home from "./pages/Home";
import CustomSnackBar from "./components/SignUp/CustomSnackBar";
import AccountDataService from "../src/services/account";
import FindYourDoctor from "./pages/FindYourDoctor";
import Calendar from "./pages/calendar";
import EditProfilePopUp from "./components/EditProfilePopUp";

/*Advanced Concepts to use:
Components tree: https://reactjs.org/docs/thinking-in-react.html
Code splitting: https://reactjs.org/docs/code-splitting.html
Load on Scroll: https://www.pluralsight.com/guides/how-to-implement-infinite-scrolling-with-reactjs
Load on Scroll: https://stackoverflow.com/questions/57778950/how-to-load-more-search-results-when-scrolling-down-the-page-in-react-js
Loading spinner: https://contactmentor.com/how-to-add-loading-spinner-react-js/
React.memo https://dmitripavlutin.com/use-react-memo-wisely/

AXIOS: https://www.digitalocean.com/community/tutorials/react-axios-react
*/
//This components is the parent of all other components
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const [editProfilePopUp, setEditProfilePopUp] = useState(false);
  const showSnackBar = (message, severity) => {
    setSnackBar((previousState) => {
      return {
        ...previousState,
        message: message,
        severity: severity,
        open: true,
      };
    });
  };

  const readSession = () => {
    AccountDataService.isLoggedIn().then((res) => {
      setAuthenticated(res.data.authenticated);
    });
  };

  useEffect(() => {
    readSession();
  }, []);
  return (
    <>
      <GlobalStates.Provider
        value={{
          authenticated,
          setAuthenticated,
          snackBar,
          setSnackBar,
          showSnackBar,
          editProfilePopUp,
          setEditProfilePopUp,
        }}
      >
        {/* <Loading /> */}
        <CustomSnackBar />
        <EditProfilePopUp />
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={<RouteRegisteration component={Guest} />}
            />
            <Route
              exact
              path="/home"
              element={<RouteProtected component={Home} />}
            />
            <Route
              exact
              path="/findyourdoctor/:specialty_id"
              element={<RouteProtected component={FindYourDoctor} />}
            />
            {/* <Route
              exact
              path="/findyourdoctor/:specialty_id"
              element={<FindYourDoctor />}
            /> */}
            <Route
              exact
              path="/calendar"
              element={<RouteProtected component={Calendar} />}
            />
            <Route exact path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </GlobalStates.Provider>
    </>
  );
}

const RouteRegisteration = ({ component: Component, ...rest }) => {
  // return <Route {...rest} render={(props) => <Component {...props} />} />;
  const globalStates = React.useContext(GlobalStates);
  return globalStates.authenticated ? <Navigate to="/home" /> : <Component />;
};

const RouteProtected = ({ component: Component, ...rest }) => {
  // return <Route {...rest} render={(props) => <Component {...props} />} />;
  const globalStates = React.useContext(GlobalStates);
  return globalStates.authenticated ? <Component /> : <Navigate to="/" />;
};

export default App;
