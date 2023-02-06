import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/App";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <App />
);

// ReactDOM.render(<h1>index Working</h1>, document.getElementById("root"));