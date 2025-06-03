import React from "react";

const SubTitulo = ({ titulo, className = "welcome-title" }) => {
  return (
    <h2 className={className}>
      <span>{titulo}</span>
    </h2>
  );
};

export default SubTitulo;


  