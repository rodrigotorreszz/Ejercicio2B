// pages/BookTracker.jsx
import React from "react";
import Titulos from "../../components/Titulos";
import Button from "../../components/Boton";
import { useNavigate } from "react-router-dom";
import "./inicio.css";
import { useBooks } from "../../hooks/useBooks"; // Importa el hook

const BookTracker = () => {
  const navigate = useNavigate();
  const { books, loading, deleteBook } = useBooks();

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este libro?")) {
      try {
        await deleteBook(id);
      } catch (error) {
        console.error("Error al eliminar el libro:", error);
      }
    }
  };

  if (loading) return <p>Cargando libros...</p>;

  return (
    <div className="booktracker-container">
      <Button
        text="Agregar libro"
        onClick={() => navigate("/books")}
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
                  <Button text="Editar" onClick={() => navigate(`/books/${id}`)} />
                  <Button text="Eliminar" onClick={() => handleDelete(id)} />
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
