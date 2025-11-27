import React from "react";
import {motion} from 'framer-motion'

const Button = ({text, className}) => {
  return (
    <motion.button
      className={`flex cursor-pointer items-center rounded-full border border-black bg-linear-to-br from-purple-500 via-blue-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
