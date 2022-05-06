import React, { useState } from "react";
import AuthenticationApi from "./utils/AuthenticationApi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loading from "./components/Loading";
import Guest from "./pages/Guest";
import Home from "./pages/Home";
import { Component } from "react";

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
  return (
    <>
      <Loading />
      <AuthenticationApi.Provider value={{ authenticated, setAuthenticated }}>
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
            <Route exact path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthenticationApi.Provider>
    </>
  );
}

const RouteRegisteration = ({ component: Component, ...rest }) => {
  // return <Route {...rest} render={(props) => <Component {...props} />} />;
  const authenticationApi = React.useContext(AuthenticationApi);
  console.log(authenticationApi);
  return authenticationApi.authenticated ? (
    <Navigate to="/home" />
  ) : (
    <Component />
  );
};

const RouteProtected = ({ component: Component, ...rest }) => {
  // return <Route {...rest} render={(props) => <Component {...props} />} />;
  const authenticationApi = React.useContext(AuthenticationApi);
  return authenticationApi.authenticated ? <Component /> : <Navigate to="/" />;
};

export default App;
