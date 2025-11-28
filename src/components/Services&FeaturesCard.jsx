import React from "react";
import Button from "./Button";
import { MoveRight, MoveUpRight } from 'lucide-react';
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const ServicesFeaturesCard = ({ id, heading, desc, tag, buttonText }) => {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row gap-5 rounded-2xl border-2 md:border-4 border-gray-300 p-6 md:p-10"
      variants={cardVariants}
      whileHover="hover"
    >
      {/* LEFT DIV   */}
      <div className="flex gap-5 basis-1/2">
        {/* LEFT */}
        <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-gray-200 p-4 text-2xl md:text-4xl">
          {id}.
        </div>

        {/* RIGHT  */}
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-gray-400 text-sm md:text-base">{tag}</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700">{heading}</h1>
          <div className="block lg:hidden mt-4">
            <Button text={buttonText} className={"self-start"} />
          </div>
        </div>
      </div>

      {/* RIGHT DIV  */}
      <div className="flex gap-6 basis-1/2 mt-4 lg:mt-0">
        <div className="flex flex-col flex-1">
          <p className="text-gray-500 leading-7 md:leading-10 text-base md:text-lg">{desc}</p>
          <motion.div 
            className="flex gap-3 items-center text-purple-700 mt-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <a className="text-base md:text-lg font-bold" href="">Learn More </a>
            <MoveRight size={20} md:size={24} strokeWidth={2.25} />
          </motion.div>
        </div>
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <MoveUpRight size={32} strokeWidth={2.75} />
          </motion.div>
        </div>
      </div>

      {/* Mobile Button - Hidden on larger screens */}
      <div className="hidden lg:block">
        <Button text={buttonText} className={"mt-7 self-start"} />
      </div>
    </motion.div>
  );
};

export default ServicesFeaturesCard;