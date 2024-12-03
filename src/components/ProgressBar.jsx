import React from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ progress, ...rest }) => {
  return (
    <div className="progress-bar-container" {...rest}>
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
