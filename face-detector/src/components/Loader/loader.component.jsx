import React from "react";
import "./loader.styles.css";

const Loader = () => {
  return (
    <div className="overlay">
      <div className="container">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
