import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.css";
import "./sass/style.css";

import Content from "./components/content";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.Fragment>
    <Content />
    <Footer />
  </React.Fragment>,
  document.getElementById("container")
);
