import React from "react";

const Input = ({ label, type, placeholder, name, value, onChange, error }) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`${
          error && "border-details"
        } border p-2 h-10 focus:outline-none `}
      />
    </div>
  );
};

export default Input;
