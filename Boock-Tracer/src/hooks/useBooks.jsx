
import { useEffect, useState } from "react";

const API_URL = "https://retoolapi.dev/ns36JG/libros";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (bookData) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
    });

    if (!res.ok) throw new Error("Error al agregar el libro");
    await fetchBooks(); // Actualiza la lista luego de agregar
  };

  const deleteBook = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateBook = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) throw new Error("Error al actualizar el libro");
  await fetchBooks();
};


  return {
    books,
    loading,
    addBook,
    deleteBook,
    updateBook
  };
};
