import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

//Import and render our App into #root div inside public/index.html
createRoot(document.getElementById("root")).render(<App />);
