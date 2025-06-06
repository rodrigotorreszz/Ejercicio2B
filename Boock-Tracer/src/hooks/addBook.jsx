import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Boton";
import { useNavigate, useParams } from "react-router-dom";
import Titulos from "../components/Titulos";
import { useBooks } from "../hooks/useBooks";

const estados = [
  { label: "Leído", value: "Leído" },
  { label: "Leyendo", value: "Leyendo" },
  { label: "Pendiente", value: "Pendiente" },
];

const AddBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { books, addBook, updateBook } = useBooks();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit && books.length > 0) {
      const bookToEdit = books.find((book) => book.id === parseInt(id));
      if (bookToEdit) {
        setValue("libro", bookToEdit.libro);
        setValue("autor", bookToEdit.autor);
        setValue("genero", bookToEdit.genero);
        setValue("estado", bookToEdit.estado);
      }
    }
  }, [isEdit, books, id, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (isEdit) {
        await updateBook(id, data);
      } else {
        await addBook(data);
      }
      reset();
      navigate("/home");
    } catch (error) {
      console.error("Error al guardar el libro:", error);
      alert("Hubo un error al guardar el libro.");
    } finally {
      setLoading(false);
    }
  };

  if (isEdit && books.length === 0) {
    // Espera a que carguen los libros para mostrar formulario
    return <p>Cargando libro para edición...</p>;
  }

  return (
    <div className="booktracker-container mx-auto p-6">
      <div className="mb-4">
        <Button
          type="button"
          text="← Volver"
          onClick={() => navigate("/home")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md shadow-sm"
        />
      </div>

      <Titulos
        titulo={isEdit ? "Editar Libro" : "Agregar Libro"}
        className="text-3xl font-semibold text-gray-800 mb-6"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full mx-auto"
      >
        <InputText
          label="Título"
          name="libro"
          placeholder="Título del libro"
          register={register}
          error={errors.libro?.message}
        />
        <InputText
          label="Autor"
          name="autor"
          placeholder="Nombre del autor"
          register={register}
          error={errors.autor?.message}
        />
        <InputText
          label="Género"
          name="genero"
          placeholder="Género del libro"
          register={register}
          error={errors.genero?.message}
        />
        <SelectInput
          label="Estado"
          name="estado"
          options={estados}
          register={register}
          error={errors.estado?.message}
        />
        <div className="mt-4 flex justify-between">
          <Button
            type="submit"
            text={loading ? "Guardando..." : isEdit ? "Actualizar" : "Agregar"}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md"
          />
          <Button
            type="button"
            text="Cancelar"
            onClick={() => navigate("/home")}
            className="ml-4 px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
