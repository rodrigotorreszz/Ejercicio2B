const InputText = ({ name, label, placeholder, type = "text", register, error }) => {
    return (
      <div className="sm:col-span-3">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-[#6b4f3a] font-poppins"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id={name}
            {...register(name, { required: `${label} is required` })}
            placeholder={placeholder}
            type={type}
            className={`block w-full rounded-xl border px-4 py-2 text-[#6b4f3a] placeholder:text-[#b19789] 
              shadow-sm font-poppins text-sm transition duration-300 ease-in-out 
              ${error ? "border-red-400 focus:ring-red-300" : "border-[#f6c7a1] focus:ring-[#e6b378]"} 
              focus:outline-none focus:ring-2 bg-[#fffefc]`}
          />
          {error && (
            <p className="text-xs text-red-500 mt-1 font-medium font-poppins">{error}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default InputText;
  