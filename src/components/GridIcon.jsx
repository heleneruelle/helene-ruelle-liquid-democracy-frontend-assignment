import React from "react";

const Grid = ({ fill = "currentColor" }) => {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8985 8.81967H17.1208V12.4262L16.0097 11.626L14.8985 12.4262V8.81967H12.1208C11.8152 8.81967 11.5652 9.09016 11.5652 9.42076V16.6339C11.5652 16.9645 11.8152 17.235 12.1208 17.235H19.8985C20.2041 17.235 20.4541 16.9645 20.4541 16.6339V9.42076C20.4541 9.09016 20.2041 8.81967 19.8985 8.81967ZM6.56521 6.4153H14.343C14.6485 6.4153 14.8985 6.14481 14.8985 5.81421V-1.39891C14.8985 -1.72951 14.6485 -2 14.343 -2H11.5652V1.60656L10.4541 0.806352L9.34299 1.60656V-2H6.56521C6.25966 -2 6.00966 -1.72951 6.00966 -1.39891V5.81421C6.00966 6.14481 6.25966 6.4153 6.56521 6.4153ZM8.78743 8.81967H6.00966V12.4262L4.89855 11.626L3.78743 12.4262V8.81967H1.00966C0.704102 8.81967 0.454102 9.09016 0.454102 9.42076V16.6339C0.454102 16.9645 0.704102 17.235 1.00966 17.235H8.78743C9.09299 17.235 9.34299 16.9645 9.34299 16.6339V9.42076C9.34299 9.09016 9.09299 8.81967 8.78743 8.81967Z"
        fill={fill}
      />
    </svg>
  );
};

export default Grid;
