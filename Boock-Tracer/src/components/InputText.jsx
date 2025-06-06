import React from "react";

const InputText = ({ label, name, register, error, ...rest }) => {
  return (
    <div className="input-container mb-4">
      {label && (
        <label htmlFor={name} className="block font-semibold mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        {...register(name)} // aquí llamamos register con el name
        {...rest}
        className={`border rounded px-3 py-2 w-full ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputText;

  