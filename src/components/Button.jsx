import React from "react";
import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    background: "linear-gradient(to bottom right, #8b5cf6, #3b82f6, #06b6d4)",
    boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

const Button = ({ text, className }) => {
  return (
    <motion.button
      className={`flex cursor-pointer items-center rounded-full border border-black bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 px-4 py-3 text-base font-semibold text-white shadow-lg md:px-8 md:py-4 md:text-lg ${className}`}
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-50px" }}
    >
      {text}
    </motion.button>
  );
};

export default Button;