import Loading from "./components/Loading";
import GuestNav from "./components/GuestNav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  return (
    <>
      <Loading />
      <Router>
        <GuestNav />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
