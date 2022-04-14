import Loading from "./components/Loading";
import GuestNav from "./components/GuestNav";
/*Advanced Concepts to use:
Components tree: https://reactjs.org/docs/thinking-in-react.html
Code splitting: https://reactjs.org/docs/code-splitting.html
Load on Scroll: https://www.pluralsight.com/guides/how-to-implement-infinite-scrolling-with-reactjs
Load on Scroll: https://stackoverflow.com/questions/57778950/how-to-load-more-search-results-when-scrolling-down-the-page-in-react-js
Loading spinner: https://contactmentor.com/how-to-add-loading-spinner-react-js/*/
//This components is the parent of all other components
function App() {
  return (
    <>
      <Loading />
      <GuestNav />
    </>
  );
}

export default App;