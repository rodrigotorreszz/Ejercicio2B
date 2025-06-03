const SelectInput = ({ name, label, options, register, error }) => {
    return (
      <div className="sm:col-span-3">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-[#6b4f3a] mb-1 font-poppins"
        >
          {label}
        </label>
        <select
          id={name}
          {...register(name, { required: `${label} es obligatorio` })}
          className={`block w-full rounded-lg border px-4 py-2 font-poppins text-[#55371f] bg-[#fffaf6] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f6c7a1] focus:border-[#f6c7a1] transition duration-200 ${
            error ? "border-red-500" : "border-[#e0d6cc]"
          }`}
        >
          <option value="">Seleccionar...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
    );
  };
  
  export default SelectInput;
  