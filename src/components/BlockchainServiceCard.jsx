import React from "react";
import { bulb } from "../assets/images";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        y: -10,
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const BlockchainServiceCard = ({ className, image, text }) => {
  return (
    <motion.div
      className={`${className} flex h-64 md:h-92 max-sm:w-[90vw]  cursor-pointer flex-col items-center justify-center gap-6 md:gap-10 rounded-2xl bg-linear-to-b p-6 md:p-10 duration-300`}
      variants={cardVariants}
      whileHover="hover"
    >
      <img className="w-12 md:w-16 lg:w-20" src={image} alt="image" />
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold">{text}</h2>
    </motion.div>
  );
};

export default BlockchainServiceCard;