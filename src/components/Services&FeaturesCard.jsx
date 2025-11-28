import React from "react";
import Button from "./Button";
import { MoveRight, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    boxShadow:
      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ServicesFeaturesCard = ({ id, heading, desc, tag, buttonText }) => {
  return (
    <motion.div
      className="flex flex-col gap-5 rounded-2xl border-2 border-gray-300 p-6 md:border-4 md:p-10 lg:flex-row"
      variants={cardVariants}
      whileHover="hover"
    >
      {/* LEFT DIV   */}
      <div className="flex basis-1/2 gap-5">
        {/* LEFT */}
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-200 p-4 text-2xl md:h-20 md:w-20 md:text-4xl">
          {id}.
        </div>

        {/* RIGHT  */}
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-sm text-gray-400 md:text-base">{tag}</p>
          <h1 className="text-2xl font-bold text-purple-700 md:text-3xl lg:text-4xl">
            {heading}
          </h1>
          <div className="mt-7 block self-start max-sm:hidden">
            <Button text={buttonText} className={"self-start"} />
          </div>
        </div>
      </div>

      {/* RIGHT DIV  */}
      <div className="mt-4 flex basis-1/2 flex-col gap-6 lg:mt-0">
        <div className="flex flex-1 flex-col">
          <p className="text-base leading-7 text-gray-500 md:text-lg md:leading-10">
            {desc}
          </p>
          <motion.div
            className="mt-4 flex items-center gap-3 text-purple-700"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <a className="text-base font-bold md:text-lg" href="">
              Learn More{" "}
            </a>
            <MoveRight size={20} md:size={24} strokeWidth={2.25} />
          </motion.div>
          {/* <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <MoveUpRight size={32} strokeWidth={2.75} />
            </motion.div>
          </div> */}
        </div>

        {/* Mobile Button - Hidden on larger screens */}
        <div className="lg:hidden">
          <Button text={buttonText} className={"self-start flex justify-center items-center"} />
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesFeaturesCard;
