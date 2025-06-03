import React from "react";

const Boton = ({ onClick, text, className = "", type = "welcome-button" }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Boton;

  
  