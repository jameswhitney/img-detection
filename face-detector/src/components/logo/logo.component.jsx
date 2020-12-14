import React from "react";

import "./logo.styles.css";
import logo from "./logo.png";

const Logo = () => (
  <div className="ma4 pa2 mt0 w-20">
    <div
      className="background br2 shadow-2"
      style={{ width: "150px", height: "150px" }}
    >
      <img alt="logo" src={logo} />
    </div>
  </div>
);

export default Logo;
