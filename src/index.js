import React from "react";
import ReactDoM from "react-dom";

import App from "./App";
import Counter from "./components/counter";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const element = <App />;

ReactDoM.render(element, document.getElementById("root"));
