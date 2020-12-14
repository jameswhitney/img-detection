import React from "react";
import "./image-link-form.styles.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
  <React.Fragment>
    <p className="white f3">{`Paste an image link below to detect faces`}</p>
    <div className="center">
      <div className="pa4 br3 shadow-2 form center">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          onChange={onInputChange}
        />
        <button
          className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple pointer"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  </React.Fragment>
);

export default ImageLinkForm;
