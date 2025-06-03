import React, { useEffect, useState } from "react";
import Titulos from "../../components/Titulos";  // <-- Esto falta y es necesario
import Button from "../../components/Boton";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

const BookTracker = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 🧭 Inicializa el navegador

  useEffect(() => {
    fetch("https://retoolapi.dev/ns36JG/libros")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando libros...</p>;

  return (
    <div className="booktracker-container">
      {/* Botón "Agregar libro" que redirige al formulario */}
      <Button
        text="Agregar libro"
        onClick={() => navigate("/books")} // ✅ Redirige al formulario
        className="booktracker-button"
      />

      <Titulos titulo="Gestión de Libros (Book Tracker)" className="booktracker-title" />

      <div className="booktracker-table-wrapper">
        <table className="booktracker-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Género</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.map(({ id, libro, autor, genero, estado }) => (
              <tr key={id}>
                <td>{libro}</td>
                <td>{autor}</td>
                <td>{genero}</td>
                <td>{estado}</td>
                <td className="booktracker-actions">
                  <Button
                    text="Editar"
                    onClick={() => alert(`Editar libro ID: ${id}`)}
                  />
                  <Button
                    text="Eliminar"
                    onClick={() => alert(`Eliminar libro ID: ${id}`)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTracker;

