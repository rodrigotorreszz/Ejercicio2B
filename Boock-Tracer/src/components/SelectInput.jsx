import React from "react";

const SelectInput = ({ label, name, register, error, options, ...rest }) => {
  return (
    <div className="input-container mb-4">
      {label && (
        <label htmlFor={name} className="block font-semibold mb-1">
          {label}
        </label>
      )}
      <select
        id={name}
        {...register(name)}
        {...rest}
        className={`border rounded px-3 py-2 w-full ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">-- Selecciona --</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectInput;

  