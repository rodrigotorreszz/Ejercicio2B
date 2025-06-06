// AddBook.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Boton";
import { useNavigate } from "react-router-dom";
import Titulos from "../components/Titulos";

const estados = [
  { label: "Leído", value: "Leído" },
  { label: "Leyendo", value: "Leyendo" },
  { label: "Pendiente", value: "Pendiente" },
];

const BookTracker = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data); // ✅ depuración
    setLoading(true);
    try {
      const response = await fetch("https://retoolapi.dev/ns36JG/libros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.statusText);
      }

      reset();
      navigate("/home");
    } catch (error) {
      console.error("Error al agregar el libro:", error);
      alert("Hubo un problema al enviar los datos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booktracker-container mx-auto p-6">
      {/* Botón para volver */}
      <div className="mb-4">
        <Button
          type="button"
          text="← Volver"
          onClick={() => navigate("/home")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md shadow-sm"
        />
      </div>

      <Titulos
        titulo="Agregar Libro"
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
          register={register("libro", { required: "El título es obligatorio" })}
          error={errors.libro?.message}
          className="mb-4"
        />

        <InputText
          label="Autor"
          name="autor"
          placeholder="Nombre del autor"
          register={register("autor", { required: "El autor es obligatorio" })}
          error={errors.autor?.message}
          className="mb-4"
        />

        <InputText
          label="Género"
          name="genero"
          placeholder="Género del libro"
          register={register("genero", { required: "El género es obligatorio" })}
          error={errors.genero?.message}
          className="mb-4"
        />

        <SelectInput
          label="Estado"
          name="estado"
          options={estados}
          register={register("estado", { required: "Selecciona un estado" })}
          error={errors.estado?.message}
          className="mb-4"
        />

        <div className="mt-4 flex justify-between">
          <Button
            type="submit"
            text={loading ? "Cargando..." : "Agregar"}
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

export default BookTracker;
