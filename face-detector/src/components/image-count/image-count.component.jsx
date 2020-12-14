import React from "react";

const ImageCount = ({ name, entries }) => (
  <React.Fragment>
    <div className="white f2">{`${name}, you've found ${entries} images with faces!`}</div>
  </React.Fragment>
);

export default ImageCount;
