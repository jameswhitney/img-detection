import React from "react";
import "./face-recognition.styles.css";

const FaceRecognition = ({ imgUrl, boxes }) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img id="image-input" alt="" src={imgUrl} width="500px" height="auto" />
      {boxes.map((box) => {
        return (
          <div
            key={box.topRow}
            className="bounding-boxes"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        );
      })}
    </div>
  </div>
);

export default FaceRecognition;
