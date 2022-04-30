import React from "react";
import "./index.scss";
import App from "./App";
import ReactDOM from "react-dom";

//Import and render our App into #root div inside public/index.html
//createRoot(document.getElementById("root")).render(<App />);
ReactDOM.render(<App />, document.getElementById("root"));
