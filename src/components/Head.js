import React from "react";
const Head = ({ children, title, subtitle }) => {
  return (
    <div className="Head">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Head;
