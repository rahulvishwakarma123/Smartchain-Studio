import page2bgImage from "../../assets/images/page2bgImage.png";
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { Button, Button2 } from "../../components";

const AchieveMore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8
      },
    },
  };

  return (
    <>
      <motion.div 
        ref={ref}
        className="bg-zinc-900 h-auto w-full py-8 md:py-10 px-4 md:px-10 text-gray-200"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-left md:text-left"
          variants={itemVariants}
        >
          Achieve More with the Right MLM Partner: Trusted Products, Happy Customers, and Industry Expertise
        </motion.h1>

        {/* cards  */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 md:gap-5 mt-8 md:mt-10"
          variants={containerVariants}
        >
          <motion.div 
            className="basis-full lg:basis-1/3 px-4 md:px-5 py-4 space-y-3"
            variants={cardVariants}
          >
            <Button2 text={"Category"}/>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-red-300 to-purple-500 bg-clip-text text-transparent">
              Product Range
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">
              We have 7+ service based product and 150+ FMCG products.
            </p>
          </motion.div>
          
          <motion.div 
            className="basis-full lg:basis-1/3 px-4 md:px-5 py-4 space-y-3"
            variants={cardVariants}
          >
            <Button2 text={"Category"}/>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-red-300 to-purple-500 bg-clip-text text-transparent">
              Customer Satisfaction
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">
              We have 99% customer satisfaction for our products.
            </p>
          </motion.div>
          
          <motion.div 
            className="basis-full lg:basis-1/3 px-4 md:px-5 py-4 space-y-3"
            variants={cardVariants}
          >
            <Button2 text={"Experiences"}/>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-red-300 to-purple-500 bg-clip-text text-transparent">
              Years of Experience
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">
              We are in this industry since 11 years. Lets join hands for glorious success.
            </p>
          </motion.div>
        </motion.div>

        {/* button  */}
        <motion.div 
          className="flex justify-center md:justify-start mt-8 md:mt-10"
          variants={buttonVariants}
        >
          <Button text={'Request a Call back Now.'} className={'border-white'}/>
        </motion.div>
      </motion.div>
    </>
  )
}

export default AchieveMore