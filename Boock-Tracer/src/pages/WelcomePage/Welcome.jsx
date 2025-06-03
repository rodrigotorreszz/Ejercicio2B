import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Boton.jsx";
import SubTitulo from "../../components/SubTitulo.jsx";
import "./Welcome.css";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <SubTitulo
          titulo="Bienvenida al Book Tracker"
          className="welcome-title"
        />
        <p className="welcome-text">
          ¡Estás a punto de comenzar un viaje literario! Registrá tus libros
          leídos, pendientes y en progreso para llevar un control fácil y
          organizado de tus lecturas.
        </p>
        <Button
          type="button"
          onClick={handleAccept}
          text="¡Comenzar a leer!"
          className="welcome-button"
        />
      </div>
    </div>
  );
};

export default Welcome;




