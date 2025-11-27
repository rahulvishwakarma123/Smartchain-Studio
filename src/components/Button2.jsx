import React from "react";

const Button2 = ({ text, className }) => {
  return (
    <button
      className={`rounded-full border-2 border-gray-100 px-8 py-2 text-lg font-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default Button2;
