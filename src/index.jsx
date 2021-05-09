import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { body } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App style={body} />
  </Router>,
  document.getElementById("root")
);
