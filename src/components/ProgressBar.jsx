import React from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div
      className="progress-bar-container"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar"
      aria-label={`Completion: ${progress}%`}
    >
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
