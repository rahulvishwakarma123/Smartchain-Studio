import React from "react";
import { motion } from "framer-motion";

const MLMChild = ({ logoName, Heading, Description, ImageName }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-4 md:gap-2 p-4 md:p-0 rounded-lg md:rounded-none bg-white md:bg-transparent shadow-md md:shadow-none"
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* para  */}
      <div className="flex basis-full md:basis-1/3 flex-col gap-2 md:gap-2">
        <div className="flex items-center gap-3">
          <img className="w-8 md:w-10" src={logoName} alt={`${Heading} Logo`} />
          <h2 className="text-xl md:text-2xl font-bold">{Heading}</h2>
        </div>
        <p className="text-justify text-gray-600 text-sm md:text-base">
          {Description}
        </p>
      </div>
      {/* image  */}
      <div className="basis-full md:basis-2/3 mt-2 md:mt-0">
        <img className="w-full rounded-lg" src={ImageName} alt={`${Heading} Image`} />
      </div>
    </motion.div>
  );
};

export default MLMChild;
