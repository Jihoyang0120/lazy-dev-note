import React from "react";
import "./styles.css";

const SwitchButton = ({ isBlogPage, switchPage }) => {
  return (
    <div className="switchButton-wrap">
      <button className="switch-button" onClick={switchPage}>
        {isBlogPage ? "To Post" : "To Blog"}
      </button>
    </div>
  );
};

export default SwitchButton;
